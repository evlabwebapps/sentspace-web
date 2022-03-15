import {createRef, useCallback, useEffect, useRef, useState} from "react";
import ConfigService from "../services/ConfigService";
import FeaturesService from "../services/FeaturesService";
import {useSearchParams} from "react-router-dom";
import _ from "lodash";


export default function ComputeForm() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [config, setConfig] = useState();
  const [validationErrors, setValidationErrors] = useState([]);
  const textArea = useRef();
  const [settingsOptions, setSettingsOptions] = useState();

  useEffect(() => {
    ConfigService.getConfig().then(
      (config) => {
        setConfig(config);
      }
    );
    ConfigService.getCheckboxes().then(
      (checkboxes) => {
        setSettingsOptions(checkboxes);
      }
    )
  }, []);

  const onTextareaChange = useCallback(({target}) => {
    if (!config) return;

    const sentences = target.value.split('\n');
    let validationErrors = [];
    if (sentences.length > config.max_sentences_num) {
      validationErrors.push("You've exceeded max. number of sentences");
    }
    if (sentences.some(sentence => sentence.length > config.max_setnence_length)) {
      validationErrors.push("You've exceeded max. sentence length")
    }
    setValidationErrors(validationErrors);
  }, [config]);

  const submitForm = useCallback(() => {
    const sentences = textArea.current.value.split('\n').filter(s => s.trim().length > 0);

    // This expression pulls all the checkbox statuses through refs
    let configValues = _.reduce(_.flatMap(
      settingsOptions,
      checkboxes => _.map(checkboxes, c => ({[c.value]: c.ref.current.checked}))
    ), (accum, checked) => ({...checked, ...accum}), {});

    console.log(configValues);

    FeaturesService.createCalculationRequest(sentences, configValues).then(
      (response) => {
        let params = searchParams;
        params.set('request', response.data['id']);
        setSearchParams(params, {replace: true});
      }
    );
  }, [textArea, settingsOptions])

  return (
    <>
      <p>
        Max. sentence length: {config?.max_setnence_length} <br/>
        Max. # of sentences: {config?.max_sentences_num}
      </p>
      <div className={"sentencesInputContainer"}>
        <div className={"textboxInputContainer"}>
          <textarea
            ref={textArea}
            cols="80"
            rows="10"
            placeholder={
              "An apple is a fruit that can be green, red or yellow\n" +
              "Apples have thin skin, a sweet, crisp pulp, and seeds inside."
            }
            onChange={onTextareaChange}
            className={"textboxTextarea"}
          />
        </div>
        <div className="settingsInputContainer">
          {_.map(settingsOptions, (checkboxes, settingsGroup) => (
            <div className="settingsCategory">
              <h4>{settingsGroup}</h4>
              {checkboxes.map(input => (
                <div className="settingsCheckbox">
                  <input type="checkbox" id={input.value} name={input.value} ref={input.ref = createRef()}/>
                  <label htmlFor={input.value}>{input.label}</label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <ul className={"validationErrors"}>
        {validationErrors.map((err, idx) => <li key={idx}>{err}</li>)}
      </ul>
      <button onClick={submitForm}>Submit</button>
    </>
  )
}
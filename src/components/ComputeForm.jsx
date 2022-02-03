import {createRef, useCallback, useEffect, useRef, useState} from "react";
import ConfigService from "../services/ConfigService";
import FeaturesService from "../services/FeaturesService";


const LEXICAL_OPTIONS = {
    "group": "Lexical",
    "inputs": [
        {
            "id": "lexical_1",
            "type": "checkbox",
            "label": "lexical 1",
            "ref": createRef()
        },
        {
            "id": "lexical_2",
            "type": "checkbox",
            "label": "lexical 2",
            "ref": createRef()
        },
        {
            "id": "lexical_3",
            "type": "checkbox",
            "label": "lexical 3",
            "ref": createRef()
        }
    ]
};
const SYNTAX_OPTIONS = {
    "group": "Syntax",
    "inputs": [
        {
            "id": "syntax_1",
            "type": "checkbox",
            "label": "syntax 1",
            "ref": createRef()
        },
        {
            "id": "syntax_2",
            "type": "checkbox",
            "label": "syntax 2",
            "ref": createRef()
        },
        {
            "id": "syntax_3",
            "type": "checkbox",
            "label": "syntax 3",
            "ref": createRef()
        }
    ]
};
const EMBEDDING_OPTIONS = {
    "group": "Embedding",
    "inputs": [
        {
            "id": "embedding_1",
            "type": "checkbox",
            "label": "embedding 1",
            "ref": createRef()
        },
        {
            "id": "embedding_2",
            "type": "checkbox",
            "label": "embedding 2",
            "ref": createRef()
        },
        {
            "id": "embedding_3",
            "type": "checkbox",
            "label": "embedding 3",
            "ref": createRef()
        }
    ]
};

export default function ComputeForm() {
    const [config, setConfig] = useState();
    const [validationErrors, setValidationErrors] = useState([]);
    const textArea = useRef();
    const [settingsOptions, setSettingsOptions] = useState([
        LEXICAL_OPTIONS,
        SYNTAX_OPTIONS,
        EMBEDDING_OPTIONS
    ]);

    useEffect(() => {
        ConfigService.getConfig().then(
            (config) => {
                setConfig(config);
            }
        );
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

    const submitForm = useCallback((_) => {
        const sentences = textArea.current.value.split('\n').filter(s => s.trim().length > 0);

        // This expression pulls all the checkbox statuses through refs
        // Inner reduce: For each input in each group build (id => checked) mapping.
        // Outer reduce: Reduce to make a single object from list of objects.
        let configValues = settingsOptions.reduce(
            (prev, current) => ({
                ...prev,
                ...current.inputs.reduce((prevInput, currentInput) => ({
                    ...prevInput,
                    [currentInput.id]: currentInput.ref.current.checked
                }), {})
            }),
            {}
        );

        FeaturesService.createCalculationRequest(sentences, configValues).then(response => console.log(response));
    }, [textArea])

    return (
        <>
            <p>
                Max. sentence length: {config?.max_setnence_length} <br/>
                Max. # of sentences: {config?.max_sentences_num}
            </p>
            <div className={"sentencesInputContainer"}>
                <div className="textboxInputContainer">
                    <textarea
                        ref={textArea}
                        cols="80"
                        rows="10"
                        placeholder={
                            "An apple is a fruit that can be green, red or yellow\n" +
                            "Apples have thin skin, a sweet, crisp pulp, and seeds inside."
                        }
                        onChange={onTextareaChange}
                    />
                </div>
                <div className="settingsInputContainer">
                    {settingsOptions.map(settingsGroup => (
                        <div className="settingsCategory">
                            <h4>{settingsGroup.group}</h4>
                            {settingsGroup.inputs.map(input => (
                                <div className="settingsCheckbox">
                                    <input type={input.type} id={input.id} name={input.id} ref={input.ref}/>
                                    <label htmlFor={input.id}>{input.label}</label>
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
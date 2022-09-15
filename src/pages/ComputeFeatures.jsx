import React from "react";
import {Container} from "react-bootstrap";
import ComputeForm from "../components/ComputeForm";
import ComputeFeaturesModal from "../components/ComputeFeaturesModal";
import {useSearchParams} from "react-router-dom";


export default function ComputeFeatures() {
  let [searchParams, _] = useSearchParams();

  return (
    <Container>
      <h1>Compute Features</h1>

      <br/>

      SentSpace features can be accessed using either a Python module (please navigate to "Usage")
      or this interactive hosted frontend which does not require any Python experience or package
      installation. For larger-scale and library-like use of SentSpace, we recommend using the
      SentSpace Python module.
      
      <br/>
      
      {
        (typeof searchParams.get('request') === 'string') &&
        <ComputeFeaturesModal requestId={searchParams.get('request')}/>
      }
      <ComputeForm/>
    </Container>
  )
}

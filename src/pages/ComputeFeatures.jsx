import React from "react";
import {Container} from "react-bootstrap";
import ComputeForm from "../components/ComputeForm";
import ComputeFeaturesModal from "../components/ComputeFeaturesModal";
import {useSearchParams} from "react-router-dom";


export default function ComputeFeatures() {
  let [searchParams, _] = useSearchParams();

  return (
    <Container>
      <h1>Compute features</h1>

      {
        (typeof searchParams.get('request') === 'string') &&
        <ComputeFeaturesModal requestId={searchParams.get('request')}/>
      }
      <ComputeForm/>
    </Container>
  )
}

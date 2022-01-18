import React from "react";
import {Container} from "react-bootstrap";


export default function Home() {
    return (
        <Container>
            <h1>Sentence Space Comparison (SentSpace)</h1>

            <p>
                Obtain a set of diverse features for your sentences
                Visualize your sentences in a high-dimensional feature space
                Compare your sentences with existing corpora!
            </p>
            <div className="alert alert-dark">
                <h4 className="alert-heading">About this project</h4>
                An open-science project to compute a diverse set of linguistic, syntactic, and semantic features for any
                given sentence. Outputs summary statistics, visualizations, and comparisons to existing corpora
                benchmarks.
            </div>
        </Container>
    )
}

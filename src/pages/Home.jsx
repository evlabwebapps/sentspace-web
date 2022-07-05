import React from "react";
import {Container} from "react-bootstrap";


export default function Home() {
    return (
        <Container>
            {/* <h2>SentSpace</h2> */}

            <div className="alert alert-dark">
                <h4 className="alert-heading">Citation</h4>
                    <b>SentSpace: Benchmarking and Evaluation of Text using Cognitively Motivated Lexical, Syntactic,
                    and Semantic Features.</b>  
                    <br />
                    Tuckute G*, Sathe A*, Wang M^, Yoder H^, Shain C, and
                    Fedorenko E. 
                    Annual Meeting of the North American Association for Computational
                    Linguistics (NAACL 2022), Seattle, WA. [
                    <a href="https://sentspace.github.io/sentspace">github</a>, 
                    <a href="https://github.com/sentspace/NAACL-HLT-2022/blob/main/NAACL_HLT_2022_SystemDemo_paper28_Camera_Ready.pdf"> paper</a>]
            </div>

            {/* <div className="alert alert-dark">
                <h4 className="alert-heading">About this project</h4>
                An open-science project to compute a diverse set of linguistic features for a given
                sentence. Produces summary statistics, visualizations, and comparisons to existing
                corpora
                benchmarks.
            </div> */}
        </Container>
    )
}

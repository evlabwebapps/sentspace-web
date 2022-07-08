import React from "react";
import { Container } from "react-bootstrap";


export default function FeatureInfo() {
    return (
        <Container>

            The SentSpace features fall into two core modules (sentence spaces): Lexical and Contextual. The features that are currently supported are described below.

            <br /><br />

            <h2 id="lexical">Lexical Features</h2>
            The Lexical module consists of features that pertain to individual lexical items, words,
            regardless of the context in which they appear.
            
            <p><strong>Age of Acquisition</strong> Age of acquisition is a metric that estimates when a
                person acquired (i.e., understood) a given word. Participants were asked for each word to enter
                the age at which they thought they had learned the word even if they could not use, read, or
                write it at the time. The norms were collected by (Kuperman et al., 2012). Norms were available
                for 30,124 unique words. Obtained from: <a href="http://crr.ugent.be/archives/806"
                    target="_blank">http://crr.ugent.be/archives/806</a>.&nbsp;</p>

            <p><strong>Arousal</strong> Arousal quantifies each word on a scale of active&ndash;passive. The
                norms were collected based on human ratings by (Mohammad, 2018) using Best-Worst scaling, where
                participants are presented with four words at a time and asked to select the word with the
                highest arousal. The two ends of the arousal dimension were: MOST arousal, activeness,
                stimulation, frenzy, jitteriness, alertness OR LEAST unarousal, passiveness, relaxation,
                calmness, sluggishness, dullness, sleepiness. Norms were available for 20,007 unique words.
                Obtained from:
                <a href="https://saifmohammad.com/WebPages/nrc-vad.html" target="_blank">https://saifmohammad.com/WebPages/nrc-vad.html</a>.&nbsp;</p>

            <p><strong>Body-Object Interaction</strong> Body-object interaction quantifies the ease with
                which the human body can interact with what a word represents. The norms were collected using
                behavioral ratings on a scale from 1 to 7 with a value of 7 indicating a high body-object
                interaction rating by (Pexman et al., 2019). The norms were available for 9,349 unique words.
                Obtained from: <a href="https://link.springer.com/article/10.3758%2Fs13428-018-1171-z#Sec9"
                    target="_blank"
                    rel="noopener">https://link.springer.com/article/10.3758%2Fs13428-018-1171-z#Sec9</a>.&nbsp;</p>

            <p><strong>Concreteness</strong> Concreteness quantifies the extent to which the concept denoted
                by the word refers to a perceptible entity. Concrete words were defined as something that exists
                in reality and can be experienced directly through the five senses or actions. Conversely,
                abstract words refer to something one cannot experience directly through your senses or actions.
                The norms were collected based on human ratings by (Brysbaert et al., 2014). Norms were
                available for 37,058 unique words. Obtained from:
                <a href="http://crr.ugent.be/archives/1330" target="_blank" rel="noopener
                noreferrer">http://crr.ugent.be/archives/1330</a>.&nbsp;</p>

            <p><strong>Contextual Diversity (Log)</strong> Contextual diversity (CD) is the number of
                contexts in which a word has been seen [cite Adelman 2005]. The metric available here was
                computed based on the SUBTLEXus database based on American subtitles (51 million words in total)
                (Brysbaert and New, 2009) and thus denotes the number of films in which the word appears. The CD
                metric is computed as log10(CDcount+1). Norms were available for 74,286 unique words. Obtained
                from the SUBTLEXus database: <a
                    href="https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus" target="_blank"
                    rel="noopener">https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus</a>.&nbsp;</p>


            <p><strong>Lexical Frequency (Log)</strong> Lexical
                frequency denotes how frequent a word occurs in a given corpus/sets of corpora. The frequency
                metric available here was computed as log10(FREQcount+1) based on American subtitles (51 million
                words in total) from the SUBTLEXus database (Brysbaert and New, 2009). Norms were available for
                74,286 unique words. Obtained from the SUBTLEXus database: <a
                    href="https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus"
                    target="_blank"
                    rel="noopener">https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus</a>.&nbsp;</p>

            <p><strong>Lexical
                Connectivity</strong> Lexical connectivity is a metric for how connected a given word is to
                other words based on association judgments. The metric views the mental lexicon as a semantic
                network where words are linked together by semantic relatedness. Lexical connectivity is
                computed as the total degree centrality of a given word node in the semantic graph. Norms were
                obtained from (Mak and Twitchell, 2020) who computed the total degree centrality based on free
                association norms collected by (De Deyne et al., 2019) (specifically, the first recalled word).
                Norms were available for 12,215 unique words. Obtained from: <a href="https://osf.io/7942s/"
                    target="_blank" rel="noopener">https://osf.io/7942s/</a>.</p>

            <p><strong>Lexical Decision
                Reaction Time (RT)</strong> Lexical decision latency measures how quickly people classify
                strings as words or non-words. The lexical decision latency provides a proxy for how quickly a
                given word is extracted from the mental lexicon/semantic memory. The norms were collected by
                (Balota et al., 2007). Norms were available for 40,482 unique words. Obtained from the English
                Lexicon Project: <a href="https://elexicon.wustl.edu/" target="_blank" rel="noopener
                noreferrer">https://elexicon.wustl.edu/</a>. Number of Morphemes A morpheme denotes
                the smallest meaningful lexical unit in a language. The number of morphemes
                quantifies how many morphemes a given word has. The primary morpheme counter
                available here is Morfessor (Virpioja et al., 2013) which uses machine learning to
                find morphological segmentations of words. If dependency issues arise with
                Morfessor, the morpheme count is obtained from the English Lexicon
                Project Database (Balota et al., 2007).&nbsp;</p>

            <p><strong>Orthographic Neighbor Frequency</strong> Orthographic neighbor frequency is a
                metric that quantifies the number of orthographic neighbors that a string has. The
                metric was computed by (Medler and Binder, 2005)
                and an orthographic neighbor was defined as a word of the same length that differs from the
                original string by only one letter. The frequency metric denotes the averaged frequency (per
                million) of orthographic neighbors. Norms were available for 66,371 unique words. Obtained from
                <a href="http://www.neuro.mcw.edu/mcword/" target="_blank"
                    rel="noopener">http://www.neuro.mcw.edu/mcword/</a>.&nbsp;</p>

            <p><strong>Orthography-Semantics Consistency (OSC)</strong> Orthography&ndash;semantics
                consistency is a metric that quantifies the degree of semantic relatedness between a
                word and other words that are orthographically similar. The metric was computed by
                (Marelli and Amenta, 2018) as the frequency-weighted average semantic similarity between
                the meaning of a given word and the meanings of all the words containing that very same
                orthographic string. Norms were available for 15,017 unique words.  Obtained from: <a
                    href="http://www.marcomarelli.net/resources/osc" target="_blank"
                    rel="noopener">http://www.marcomarelli.net/resources/osc</a>.&nbsp;</p>

            <p><strong>Polysemy</strong> Polysemy provides a metric of how many distinct meanings a word
                has. Polysemy was measured by the number of definitions of a word in WordNet (Miller, 1992).
                Polysemy was implemented using NLTK&rsquo;s word_net library (synsets() function) which accepts
                a word and a part-of-speech tag as input and returns a list of synonyms. Parts-of-speech tags
                were taken from NLTK&rsquo;s pos_tag, then mapped to the four POS tags accepted by word_net. If
                a POS tag could not be mapped to one of word_net&rsquo;s ADJ, VERB, NOUN, or ADV then the tag
                given was an empty string. The number of synonyms for a given word were counted. Norms were
                available for 155,327 words organized in 175,979 synsets for a total of 207,016 word-sense pairs
                (Wikipedia). Obtained from the NLTK interface: <a href="https://www.nltk.org/howto/wordnet.html"
                    target="_blank" rel="noopener">https://www.nltk.org/howto/wordnet.html</a>.</p>

            <p><strong>Prevalence</strong> Word prevalence is a metric that quantifies the number of people
                who know a given word. The norms were collected by (Brysbaert et al., 2019) based on human
                ratings of whether or not they knew the word. Norms were available for 61,855 unique words.
                Obtained from: <a href="https://osf.io/g4xrt/" target="_blank"
                    rel="noopener">https://osf.io/g4xrt/</a>.&nbsp;</p>

            <p><strong>Valence</strong> Valence
                quantifies each word on a scale of positiveness&ndash;negativeness. The norms were collected
                based on human ratings by (Mohammad, 2018) using Best-Worst scaling, where participants are
                presented with four words at a time and asked to select the word with the highest valence. The
                two ends of the valence dimension were: MOST happiness, pleasure, positiveness, satisfaction,
                contentedness, hopefulness OR LEAST unhappiness, annoyance, negativeness, dissatisfaction,
                melancholy, despair. Norms were available for 20,007 unique words. Obtained from: <a
                    href="https://saifmohammad.com/WebPages/nrc-vad.html" target="_blank"
                    rel="noopener">https://saifmohammad.com/WebPages/nrc-vad.html</a>.&nbsp;</p>

            <p><strong>Sensorimotor norms</strong>  The Lancaster Sensorimotor norms (Lynott et al.,
                2020) is a set of 11 norms across six perceptual modalities (touch, hearing, smell,
                taste, vision, and interoception) and five action effectors (mouth/throat, hand/arm,
                foot/leg, head excluding mouth/throat, and torso) for almost 40,000 English words.
                Obtained from: https://osf.io/7emr6/
            </p>

            <p><strong>Socialness</strong>
                The degree to which a word is related to social characteristics of
                people, social behaviors, values, institutions, etc. Socialness norms were collected for
                8000 unique words (Diveica et al., 2022). Obtained from:
                <div><a href="https://link.springer.com/article/10.3758/s13428-022-01810-x#Sec15" target="_blank" rel="noopener">https://link.springer.com/article/10.3758/s13428-022-01810-x#Sec15</a></div>
            </p>


            <p><strong>Semantic Diversity</strong> Semantic diversity is a metric that quantifies semantic
                ambiguity based on variability in the contextual usage of words. The metric was computed by
                (Hoffman et al., 2013) and takes a step beyond simply summing the number of definitions that a
                word has. The underlying assumption is that words that appear in a wide range of contexts on
                diverse topics are more variable in meaning than those that appear in a restricted set of
                similar contexts. Hoffman et al. thus quantify the degree to which the different contexts
                associated with a given word vary in their meanings. Norms were available for 31,739 English
                words.
                Obtained from: <div><a href="https://link.springer.com/article/10.3758/s13428-012-0278-x#SecESM1" target="_blank" rel="noopener">https://link.springer.com/article/10.3758/s13428-012-0278-x#SecESM1</a></div>
            </p>

            <p><strong>Word Length</strong> Word length as measured by
                characters.</p>

            <p><strong>Zipf Lexical Frequency</strong> The Zipf lexical frequency is a
                metric of word frequency, but on a different scale than standard frequency. The Zipf scale was
                proposed by (van Heuven et al., 2014) as a scale that is easier to interpret than the usual
                frequency scales. Zipf values range from 1 to 7, with the values 1-3 indicating low-frequency
                words (with frequencies of 1 per million words and lower) and the values 4-7 indicating
                high-frequency words (with frequencies of 10 per million words and higher). Norms were based on
                American subtitles (51 million words in total) from the SUBTLEXus database (Brysbaert and New,
                2009). Norms were available for 74,286 unique words. Obtained from the SUBTLEXus database: <a
                    href="https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus"
                    target="_blank"
                    rel="noopener">https://www.ugent.be/pp/experimentele-psychologie/en/research/documents/subtlexus</a>).</p>



            <h2 id="contextual">Contextual Features</h2>
            The Contextual module consists of features that quantify contextual and combinatorial
            inter-word relations that are not captured by individual lexical items. This module
            encompasses features that relate to the syntactic structure of the sentence
            (<var> Contextual_syntax </var> features) and features that apply to the sentence context
            but are not (exclusively) related to syntactic structure (<var> Contextual_misc </var>
            features).

            <br /><br />

            <p><strong>Content
                Word Ratio</strong> Lexical density is the proportion of content words to function words in a
                sentence. It is a proxy for how much information a sentence contains. Content words were defined
                as nouns, verbs, adjectives, and adverbs and were defined using the NLTK part-of-speech
                tagger.&nbsp;</p>

            <p><strong>Dependency Locality Theory (DLT) Variants</strong> The Dependency
                Locality Theory (DLT) (Gibson, 2000) features are measures of storage and integration costs
                during sentence processing. The DLT is a theory of word-by-word comprehension difficulty during
                human language processing, with difficulty hypothesized to arise from working memory demand
                related to storing items in working memory (storage cost) and retrieving items from working
                memory (integration cost) as required by the dependency structure of the sentence. We include
                the traditional DLT metrics, as well as modifications as described in (Shain et al.,
                2016).&nbsp;</p>

            <p><strong>Left-Corner Features</strong> The left-corner features are based on
                left-corner theories of sentence processing as described in (Rasmussen and Schuler, 2018).
                Similar to DLT, left-corner parsing models also posit storage and integration costs, but these
                costs are thought to derive not from dependency locality but from the number of unconnected
                fragments of phrase structure trees that must be maintained and combined in memory throughout
                parsing, word-by-word. See (Shain et al., 2021a) for detailed description of these features, but
                in brief they include: end of constituent, length of constituent (3 variants), end of center
                embedding, start of multi-word center-embedding, end of multi-word center embedding, length of
                multiword center embedding (3 variants), and syntactic embedding depth. Features are derived
                from automatic parse trees generated by the van Schijndel et al. (2013) parser trained on a
                generalized categorial grammar reannotation (Nguyen et al., 2012) of the Penn Treebank corpus
                (Marcus et al., 1993). </p>

            <p><strong>N-gram Surprisal</strong> N-gram surprisal provides a metric of
                how surprising a word is given its context. The norms were computed by (Piantadosi et al., 2011)
                based on Google (Brants and Franz, 2009) using a standard probabilistic N-gram model which
                treats the context as consisting only of the local linguistic context containing the previous N
                &minus; 1 words. The norms are available for N = 2, 3, 4, i.e. 2-grams, 3-grams and 4-grams.
                Norms were available for 3,297,629 (2-grams), 2,133,709 (3-grams) and 1,600,987 (4-grams) unique
                words. Obtained from <a
                    href="https://colala.berkeley.edu/data/PiantadosiTilyGibson2011/Google10L-1T" target="_blank"
                    rel="noopener">https://colala.berkeley.edu/data/PiantadosiTilyGibson2011/Google10L-1T</a>.&nbsp;</p>

            <p><strong>Pronoun Ratio</strong> The pronoun ratio is the proportion of pronoun words to all
                words in a sentence. It is a proxy for how much discourse is assumed in a sentence. Pronoun
                words were defined using the NLTK part-of-speech tagger.&nbsp;</p>

            <p><strong>Language Model
                Surprisal</strong> Language model surprisal provides a metric for how surprising (i.e., likely)
                a given sentence is by using the probability distribution obtained from pre-trained
                state-of-the-art language models. The default probability is computed as the product of
                individual tokens&rsquo; log probabilities. The language models were obtained using the
                HuggingFace Transformers framework (Wolf et al., 2020).&nbsp;</p>

            <p><strong>Syntactic Rule Frequency (under development)</strong> The syntactic rule frequencies consist of counts of
                n-ary and binary syntactic rules. For both n-ary (n is an arbitrary number larger than two) and
                binary rules, the sentence is dependency parsed (CoNLL format). The <em>n</em>-ary version gets
                all heads, along with its part of speech and its dependency relations. So if there is a verb
                with a subject and object, an n-ary rule would be: nsubj-V-dobj. The binary version is similar,
                but takes each head/dependency relationship separately. So the rules would be nsubj-V, V-dobj,
                etc. Thus, the syntactic rule frequency features consist of the number of times each n-ary and
                binary rules occur. The code framework to compute the features was obtained from Kyle Mahowald
                (preprint to appear).</p>

        </Container>
    )
}

import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { withGutters } from '../lib/styles';

export default function HomePage() {
  return (
    <Layout>
      <div className="page-container">
        <SEO title="Code of Conduct" />
        <div css={[withGutters, { marginBottom: '2rem' }]}>
          <h1>Code of Conduct</h1>
          <p>
            CodeWorking is a community! We strive to create an inclusive,
            judgement- and harassment-free place for individuals of all
            backgrounds and levels of experience to learn, connect, and grow
            together.
          </p>
          <p>
            Every person has their personal story that has shaped their unique
            perspective. This can be a fascinating thing! Everyone you meet has
            the potential to amaze you with the things they’ve done and the
            things they know. However, it can also create misunderstandings,
            which can potentially lead to conflict.
          </p>
          <p>
            In order to mitigate conflict, and to create a more welcoming, safe
            atmosphere, all attendees:
          </p>
          <h3>Be considerate</h3>
          <p>
            Approach your interactions with thoughtfulness and care. Recognize
            the myriad differences between yourself and others, and that you may
            not view the world through the same lens. Do not dismiss someone
            because they have a different level of experience, are of a
            different background, or have a difference of opinion. Be kind to
            others.
          </p>
          <h3>Be respectful</h3>
          <p>
            Disagreement is not an excuse for poor manners. We work together to
            resolve conflict, assume good intentions and do our best to act in
            an empathic fashion. We don’t allow frustration to turn into a
            personal attack. A community where people feel uncomfortable or
            threatened is not a productive one.
          </p>

          <h2>Anti-Harassment Policy</h2>
          <p>
            CodeWorking is dedicated to providing a harassment-free conference
            experience for everyone, regardless of gender, gender identity and
            expression, age, sexual orientation, disability, physical
            appearance, body size, race, ethnicity, religion (or lack thereof),
            or technology choices. We do not tolerate harassment of conference
            participants in any form. Sexual language and imagery is not
            appropriate for any conference venue, including talks, workshops,
            parties, Twitter and other online media. Conference participants
            violating these rules may be sanctioned or expelled from the
            conference without a refund at the discretion of the conference
            organisers.
          </p>
          <ul css={{ marginLeft: '2rem' }}>
            <li>
              Verbal or written offensive comments related to gender, gender
              identity and expression, sexual orientation, disability, physical
              appearance, body size, race, age, or religion
            </li>
            <li>Sexual images in public spaces</li>
            <li>Deliberate intimidation, stalking, or following</li>
            <li>Harassing photography or recording</li>
            <li>Sustained disruption of talks or other events</li>
            <li>Inappropriate physical contact</li>
            <li>Unwelcome sexual attention</li>
            <li>Advocating for, or encouraging, any of the above behaviour</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

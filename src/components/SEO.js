import React from 'react';
import { Helmet, HelmetData } from 'react-helmet-async';


const helmetData = new HelmetData({});

export default function SEO({ title, description, keywords }) {
  return (
    <Helmet helmetData={helmetData}>
      { /* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href="https://www.easto.in" />
      { /* End standard metadata tags */}
      { /* Facebook tags */}
      {/* <meta property="og:type" content={type} /> */}
      <meta property="og:title" content={title} />
      <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
      <meta property="fb:app_id" content="61559348966350" />
      <meta property="og:image" content="https://www.easto.in/easto-full-logo-gr-txt-wh-bg.png" />
      <meta property="og:description" content={description} />
      {/* <link rel="icon" href="/favicon.ico" /> */}
      { /* End Facebook tags */}
      { /* Twitter tags */}
      {/* <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} /> */}
      { /* End Twitter tags */}
    </Helmet>
  )
};

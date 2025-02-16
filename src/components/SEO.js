import React from 'react';
import { Helmet, HelmetData } from 'react-helmet-async';

const helmetData = new HelmetData({});

export default function SEO({ title, description, name, type }) {
  return (
    <Helmet helmetData={helmetData}>
      { /* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name="keywords" content="software courses, coding bootcamp, programming academy" />
      <link rel="canonical" href="https://www.easto.in" />
      { /* End standard metadata tags */}
      { /* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      { /* End Facebook tags */}
      { /* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      { /* End Twitter tags */}
    </Helmet>
  )
};

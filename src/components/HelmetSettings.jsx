import React from 'react'
import {Helmet} from "react-helmet"

const HelmetSettings = () => {
  return (
    <div>
        <Helmet>
            <html lang="cs" />
            <title>Oskon s.r.o.</title>
            <meta name="description" content="Společnost Oskon s.r.o. se zabývá kovovýrobou, strojním obráběním kovů a svařováním. Dále se zabýváme výrobou specializovaných strojích přípravků." />
        </Helmet>
    </div>
  )
}

export default HelmetSettings
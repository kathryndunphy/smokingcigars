import React from "react";

import Cigar from "./Cigar/Cigar";

const cigars = props =>
  props.cigars.map((cigar, index) => {
    return (
      <Cigar
        click={() => props.clicked(index)}
        blend={cigar.blend}
        characteristics={cigar.characteristics}
        key={cigar.id}
        changed={event => props.changed(event, cigar.id)}
      />
    );
  });

export default cigars;

import React from 'react';

const cigars = (props) => props.cigars.map((cigar, index) => {
        return (
          <Cigar
            click={() => this.deleteCigarHandler(index)}
            blend={cigar.blend}
            characteristics={cigar.characteristics}
            key={cigar.id}
            changed={event => this.cigarChangeHandler(event, cigar.id)}
          />
        );
      }) 
;
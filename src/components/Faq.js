
import { useState } from 'react'
import './Faq.css'
import React from 'react';

function Faq() {

    const [selected, setSelected] = useState(null)


    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (

<div className='wrapper' classID='wrappor'>
    <div className='accordian'>
        {data.map((item, i) => (
          <div className='item'>
                <div className='title' onClick={() => toggle(i)}>
                    <h2>{item.question}</h2>
                    <span>{selected === i ? '-' : '+'}</span>
                </div>
            <div
             className={
                 selected === i ? 'content show' : 'content'
             }
              > 
                {item.answer}
              </div>
            </div>          

    
        ))}


</div>

</div>

)

    }



    const data =[
        {
            question: 'Hvordan bli lærling bedrift?',
            answer:'Ergo ita: non posse honeste vivi, nisi honeste vivatur? Duo Reges: constructio interrete. Quae in controversiam veniunt, de iis, si placet, disseramus. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus; Pauca mutat vel plura sane; Quantum Aristoxeni ingenium consumptum videmus in musicis? Quis enim confidit semper sibi illud stabile et firmum permansurum, quod fragile et caducum sit?'
          },

        {
            question: 'Hvilke typer lærlinger tar vi inn?',
            answer:'Ergo ita: non posse honeste vivi, nisi honeste vivatur? Duo Reges: constructio interrete. Quae in controversiam veniunt, de iis, si placet, disseramus. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus; Pauca mutat vel plura sane; Quantum Aristoxeni ingenium consumptum videmus in musicis? Quis enim confidit semper sibi illud stabile et firmum permansurum, quod fragile et caducum sit?'

        },
        {
            question: 'Hvordan få godkjenning som lærebedrift?',
            answer:'Ergo ita: non posse honeste vivi, nisi honeste vivatur? Duo Reges: constructio interrete. Quae in controversiam veniunt, de iis, si placet, disseramus. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus; Pauca mutat vel plura sane; Quantum Aristoxeni ingenium consumptum videmus in musicis? Quis enim confidit semper sibi illud stabile et firmum permansurum, quod fragile et caducum sit?'
    
            },
             {
            question: 'Spørsmål? Send oss en liten melding',
            answer:'Ergo ita: non posse honeste vivi, nisi honeste vivatur? Duo Reges: constructio interrete. Quae in controversiam veniunt, de iis, si placet, disseramus. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus; Pauca mutat vel plura sane; Quantum Aristoxeni ingenium consumptum videmus in musicis? Quis enim confidit semper sibi illud stabile et firmum permansurum, quod fragile et caducum sit?'


      }

 ]


 export default Faq
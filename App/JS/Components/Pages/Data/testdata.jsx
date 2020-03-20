import React from 'react';

const TestData = () => {
  const data = {
    columns: [
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Program',
        field: 'program',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Year',
        field: 'year',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Link',
        field: 'link',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
        {
          type: 'Adaptation',
          program: '',
          name: 'Scoping of the Approximate Climate Change Adaptation Costs in Several Key Sectors for South Africa up to 2050',
          description: 'This report provides quantitative economic analyses of climate change impacts and the inferred estimated adaptation costs in key sectors, including water, agriculture and biodiversity and ecosystem services, up to 2050. It highlights that the costing of climate change adaptation responses and their benefits (calculated in terms of avoided damages) is still in its infancy, especially when compared to the advances made with respect to determining mitigation costs, and further outlines some of the challenges particular to economic analyses of adaptation. The report draws attention to the unique challenges of developing adaptation responses in the face of climate uncertainty, as well as the opportunities and benefits that adaptation responses can potentially provide, particularly in terms of local economic development. It concludes with recommendations of the conditions and actions required for an effective integrated adaptation response in the short, medium and long term.',
          year: 2011,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/climatechnage_adpation_costscoping.pdf");}}>link</button>]
        },
        {
          type: 'Climate Change',
          program: '',
          name: 'Governance of Climate Change in South Africa',
          description: 'This paper aims to provide informed recommendations for appropriate governance and coordination mechanisms that can support the mainstreaming of climate change within all spheres of government. It then draws lessons both from South African case studies outside the environment field and from international experiences, which might be useful for climate change governance.',
          year: 2011,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/docs/climate_change_governance.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'GHG National Inventory Report South Africa 2000 - 2012',
          description: 'This report documents South Africa\'s submission of its national greenhouse gas inventory for the year 2012. It also reports on the GHG trends for the period 2000 to 2012.',
          year: 2017,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/gng_nationalinventoryreport2000_2012.pdf");}}>link</button>]
        },
        {
          type: 'Mitigation',
          program: '',
          name: 'GHG Inventory for South Africa 2000 - 2010',
          description: 'This report documents South Africa\'s submission of its national greenhouse gas inventory for the year 2010. The reporting of these emissions is in line with the IPCC 2006 Guidelines.',
          year: 2014,
          link: [<button onClick={(event) => {event.preventDefault(); window.open("https://www.environment.gov.za/sites/default/files/reports/gng_nationalinventoryreport2000_2012.pdf");}}>link</button>]
        }
       ]
  };

  return (
      data
  );
}

export default TestData;
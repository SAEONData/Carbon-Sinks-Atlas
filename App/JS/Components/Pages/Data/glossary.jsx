import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DataGlossary = () => {
  const data = {
    columns: [
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'asc'
      }
    ],
    rows: [
        {
          word: 'Biomass',
          description: 'all biological matter with plant matter being defined as phytomass; however for the purposes this report  biomass refers to plant material only.  Biomass is expressed as bone dry weight of dry matter per area (usually g/m2, kg/ m2, kg/ha or t/ha or Tg (when summed over the country).'
        },
        {
          word: 'Carbon pools',
        description: [<p>stores of carbon that when summed make up the total carbon content of the  AFOLU sector that include:<br/>• Above and below ground woody matter<br/>• Dead wood and litter <br/>• Above and below ground woody matter<br/>• SOC – Soil organic carbon</p>]
        },
        {
          word: 'Carbon sequestration',
          description: 'the process of the capture and storage (fixing) of carbon into carbon sinks over time that may either be part of the natural process or enhanced through management measures.  It is measured in carbon per area per time and often expressed in carbon credit data as tCO2-e/ha/yr (tonnes carbon dioxide equivalents per hectare per year).'
        },
        {
          word: 'Conservation agriculture',
          description: 'a concept that combines a number of land-use management practices to ensure overall agricultural sustainability and soil health.'
        },
        {
          word: 'Cropland',
          description: 'a land use-activity that concentrates and grows plants (cultivation) that are cropped (either whole plants or fruits) for use by humans and domesticated animals, primarily as a food source.  Croplands include a variety of plants such as hay, vegetables, cereal crops, sugarcane, orchards and vineyards.'
        },
        {
          word: 'Ecological Recovery/Regeneration',
          description: 'the restoration of natural ecosystems through the natural cyclic processes of renewal and self maintenance of species and their populations (Del Marco et al, 2004).'
        },
        {
          word: 'Fynbos',
          description: 'the fynbos biome as per the South African National Biodiversity Institute (SANBI) 2012 VEGMAP (based on Mucina and Rutherford; 2006 and 2014).'
        },
        {
          word: 'Grassland',
          description: 'the grassland biome as per the South African National Biodiversity Institute (SANBI) 2012 VEGMAP (based on Mucina and Rutherford; 2006 and Mucina, et al., 2014) '
        },
        {
          word: 'Humic soils',
          description: '“soils with organic carbon values >1.8%and having a low base reserve” (Soil Classification Working Group, 2018; p15).'
        },
        {
          word: 'Karoo',
          description: 'the nama- and succulent karoo biomes as per the South African National Biodiversity Institute (SANBI) 2012 VEGMAP (based on Mucina and Rutherford; 2006 and 2014).'
        },
        {
          word: 'Land-use activities',
          description: 'any activity upon the land that makes use of the earth surface such as cultivation, grazing, mining, urban development, etc.'
        },
        {
          word: 'Land-use management',
          description: 'any practice used to manage land-use activities, such as tillage, burning regimes, crop rotation, fertilisation, etc.'
        },
        {
          word: 'Mineral soils',
          description: 'soils that do not have a high SOCc and cannot be classified as organic or peat i.e. have a SOCc of \<10%.'
        },
        {
          word: 'Organic carbon',
          description: ' carbon that “enters the soil through decomposition of plant and animal residues, root exudates, living and dead micro-organisms and soil biota” (Edwards et al., 1999; pg) i.e. carbon within the soil from a biological source.'
        },
        {
          word: 'Organic soils',
          description: 'soils with a pronounced accumulation of humified organic materials where the surface horizon averages between 10% and 20% SOCc and are subjected to extended periods of water saturation (permanent / near permanent).  This soil type occurs mainly in valley bottoms and high altitude plateaux / mountainous regions (Soil Classification Working Group, 2018).'
        },
        {
          word: 'Pasture',
          description: 'is prepared land (ploughed and fertilised) and covered (vegetated) with grass and / or other low plants suitable for grazing of primarily domesticated animals.  As such the flora content and density of pastures is managed to ensure benefit for the grazing animals (appropriate grass species, legume species or root crops).  Pastures may be annual or perennial, and maybe grazed or cropped (i.e. mown and baled).'
        },
        {
          word: 'Peat soils',
          description: 'soils where the organic carbon content is >20% and are subjected to water inundation or extended periods of water saturation – this is a rare wetland type (Soil Classification Working Group, 2018).'
        },
        {
          word: 'Primary grasslands',
          description: '“those that have not been significantly modified from their original state and that still retain their essential ecological characteristics and functions; even though they may no longer have their full complement of naturally-occurring species. They have not undergone significant and/or irreversible modification”, (Mucina et. al, 2014).  Essentially these are species-rich grasslands which survive today in a few isolated areas that are generally of no interest to present day anthropogenic activities and seem to have remained so for hundreds if not thousands of years (Bredenkamp et.al, 2006).'
        },
        {
          word: 'Rehabilitation',
          description: 'any attempt to restore elements of structure or function to an ecological system without necessarily attempting complete restoration to any specific prior condition (Meffe and Carroll, 1997).'
        },
        {
          word: 'Restoration',
          description: 'the return of a community to its pre-disturbance or natural state in terms of abiotic (non-living) conditions, community structure and species composition (English and Blyth, 1999).'
        },
        {
          word: 'Re-vegetation',
          description: 'replanting vegetation or sowing of seed (may be part of a restoration project).'
        },
        {
          word: 'Savanna',
          description: 'the savanna biome as per the South African National Biodiversity Institute (SANBI) 2012 VEGMAP (based on Mucina and Rutherford; 2006 and 2014)'
        },
        {
          word: 'Secondary grasslands',
          description: 'grasslands that have undergone modification (e.g. through overgrazing, incompatible burning practices (i.e. season / frequency), cultivation / ploughing) but have then returned to grassland through re-colonisation by indigenous grasses (Mucina et. al, 2014).'
        },
        {
          word: 'Soil',
          description: 'weathered rock (mineral particles) mixed with decayed organic matter (humus) that contains living matter (supporting a wide range of biotic communities) and is capable of supporting plants (retaining water, providing nutrients).'
        },
        {
          word: 'Soil carbon sink',
          description: 'the value of the pool / accumulation / storage of carbon in the soil and is effectively the calculation of SOCs.'
        },
        {
          word: 'Soil organic carbon (SOC)',
          description: 'the carbon fraction that is stored in SOM (Edwards et al., 1999); also sometimes referred to as “total organic carbon” in the literature.  SOC is the main source of energy for soil microorganisms with 1% SOC content (SOCc) equating to approximately 1.72% SOM per 100 g soil (Edwards et al., 1999; Soil Classification Working Group, 1991'
        },
        {
          word: 'Soil organic matter (SOM)',
          description: [<p>the “organic fraction of soil ranging from undecayed plant and animal tissue through ephemeral products of decomposition to fairly stable amorphous brown to black material, known as humus, which bears no trace of the anatomical structure from which it was derived” (Soil Classification Working Groups, 1991; pg 233) i.e. does not include non-decomposed plant and animal residues, but does include organic carbon, organic nitrogen, organic phosphorus etc. – nutrients in organic form.  SOM has a number of pools based on turnover time or rate of decomposition, namely:<br/>• Labile pool – fresh residues with relatively rapid turnover (under 5 years).<br/>• Resistant residues pool - physically or chemically protected residues that are slower to turn over (20-40 years).<br/>• Stable pool - protected humus and charcoal components that are effectively stable from a human life span perspective (100s to 1000s years turnover).</p>]
        },
        {
          word: 'Soil system',
          description: 'a dynamic system that includes the soil type, classification, chemistry, texture, soil activities and environmental setting that impact on land use, function and carbon sequestration.'
        },
        {
          word: 'Stocking rate',
          description: 'the number of animals (wild or domestic) of a particular class (often defined by weight and function) allocated to a unit area of land for a specified period (usually the growing period of the vegetation type in question).  It can be expressed either in terms of animal numbers per unit of land (animals/ha) or as land area available for each animal (ha/animal)'
        },
        {
          word: 'Subsoil',
          description: 'mineral horizon/s below the topsoil that is/are usually characterised by a diverse range of properties including the accumulation and concentration of quartz in the clay and silt fractions, lower colloidal matter and obliteration of the rock structure. Defined as the soil layer from 0.3 to 1 m depth in this report.'
        },
        {
          word: 'Thicket',
          description: 'the albany thicket biome as per the South African National Biodiversity Institute (SANBI) 2012 VEGMAP (based on Mucina and Rutherford; 2006 and 2014).'
        },
        {
          word: 'Topsoil',
          description: 'the surface horizon, usually mineral, with a greater or lesser amount of humified organic matter. Defined as the top 0.3m  soil layer from this report.'
        },
        {
          word: 'Vegetation cover',
          description: 'the amount of the earth surface covered by vegetation, or in the case of tree cover the amount of the area covered by tree crowns .'
        },
        {
          word: 'Vegetation structure',
          description: 'the physical nature of the vegetation such as height, the mix of plant forms such as trees, shrubs, grass, the degree of woodiness etc.'
        },
        {
          word: 'Veld / grassland management',
          description: 'refers to the stocking rate and burning regime applied to an area of grassland or savanna.'
        }
        
       ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    />
  );
}

export default DataGlossary;
import React from 'react';
import { MDBDataTable } from 'mdbreact';

const LocalMunicipalitiesData = () => {
  const data = {
    columns: [
      {
        label: 'Province',
        field: 'province',
        sort: 'asc'
      },
      {
        label: 'Municipality',
        field: 'municipality',
        sort: 'asc'
      },
      {
        label: 'Natural Vegetation',
        field: 'natveg',
        sort: 'asc'
      },
      {
        label: 'Bare degraded',
        field: 'baredeg',
        sort: 'asc'
      },
      {
        label: 'Fallow',
        field: 'fallow',
        sort: 'asc'
      },
      {
        label: 'Water',
        field: 'water',
        sort: 'asc'
      },
      {
        label: 'Wetlands',
        field: 'wetlands',
        sort: 'asc'
      },
      {
        label: 'Indigenous Forest',
        field: 'indifor',
        sort: 'asc'
      },
      {
        label: 'Commercial Agriculture',
        field: 'comagri',
        sort: 'asc'
      },
      {
        label: 'Pivot Agriculture',
        field: 'pivotagri',
        sort: 'asc'
      },
      {
        label: 'Orchards',
        field: 'orchards',
        sort: 'asc'
      },
      {
        label: 'Viticulture',
        field: 'viticulture',
        sort: 'asc'
      },
      {
        label: 'Pineapple',
        field: 'pineapple',
        sort: 'asc'
      },
      {
        label: 'Subsistence Agriculture',
        field: 'subagri',
        sort: 'asc'
      },
      {
        label: 'Sugarcane Irrigated',
        field: 'sugarir',
        sort: 'asc'
      },
      {
        label: 'Sugarcane Dry',
        field: 'sugardry',
        sort: 'asc'
      },
      {
        label: 'Plantation Forest',
        field: 'plantfor',
        sort: 'asc'
      },
      {
        label: 'Mines',
        field: 'mines',
        sort: 'asc'
      }
    ],
    rows: [
      {
        province:'Western Cape',
        municipality:'Hantam (NC065)',
        natveg:'-454',
        baredeg:'-7478',
        fallow:'43',
        water:'-4356',
        wetlands:'-165',
        indifor:'456',
        comagri:'234',
        pivotagri:'-456',
        orchards:'43',
        viticulture:'7656',
        pineapple:'43',
        subagri:'-456',
        sugarir:'77',
        sugardry:'-7554',
        plantfor:'53',
        mines:'2'
      },
      {
        province:'Western Cape',
        municipality:'Kai !Garib (NC082)',
        natveg:'-387',
        baredeg:'373',
        fallow:'-238',
        water:'-2372',
        wetlands:'-3453',
        indifor:'-546',
        comagri:'567',
        pivotagri:'-8954',
        orchards:'456',
        viticulture:'-3453',
        pineapple:'779',
        subagri:'34',
        sugarir:'213',
        sugardry:'-456',
        plantfor:'678',
        mines:'5'
      },
      {
        province:'Western Cape',
        municipality:'Emalahleni (EC136)',
        natveg:'234',
        baredeg:'-564',
        fallow:'76',
        water:'-4356',
        wetlands:'-345',
        indifor:'678',
        comagri:'475',
        pivotagri:'-456',
        orchards:'-57',
        viticulture:'456',
        pineapple:'-653',
        subagri:'-234',
        sugarir:'-456',
        sugardry:'-345',
        plantfor:'567',
        mines:'-3'
      },
      {
        province:'Western Cape',
        municipality:'Kamiesberg (NC064)',
        natveg:'-643',
        baredeg:'-345',
        fallow:'-973',
        water:'9375',
        wetlands:'2845',
        indifor:'-485',
        comagri:'-483',
        pivotagri:'732',
        orchards:'0',
        viticulture:'-3854',
        pineapple:'273',
        subagri:'-3482',
        sugarir:'-2234',
        sugardry:'-345',
        plantfor:'-34',
        mines:'2'
      }
     ]
  };

  return (
    <>
    <div className="filterTable">
    <label className="tableSelectFilter">Filter records:</label>
    <select className="tableSelect">
    <option value="ZA-EC">All Local Municipalities</option>
    <option value="ZA-EC">Eastern Cape</option>
    <option value="ZA-FS">Free State</option>
    <option value="ZA-GT">Gauteng</option>
    <option value="ZA-KZN">KwaZulu-Natal</option>
    <option value="ZA-LP">Limpopo</option>
    <option value="ZA-MP">Mpumalanga</option>
    <option value="ZA-NW">North West</option>
    <option value="ZA-NC">Northern Cape</option>
    <option value="ZA-WC">Western Cape</option>
    </select>
      {/* <div id="record-filters" className="btn-group" data-toggle="buttons" >
        <label>Filter records:</label>
        <label id="gridDisplayPublicDeadLabel" className="btn btn-primary">
          <input type="radio" name="GridDisplay" id="gridDisplayDead" value="Public" /> Public
        </label>
        <label id="gridDisplayCommercialLabel" className="btn btn-primary">
          <input type="radio" name="GridDisplay" id="gridDisplayAlive" value="Commercial" /> Commercial
        </label>
        <label id="gridDisplayAllLabel" className="btn btn-primary active">
          <input type="radio" name="GridDisplay" id="gridDisplayAll" value="all" defaultChecked /> All
        </label>
      </div> */}
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
      exportToCSV
      searching={false}
      paging={false}
      info={false}
      id="tableSmall"
      width="100%"
    />
    </div>
    </>
  );
}



export default (LocalMunicipalitiesData);
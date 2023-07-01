import React from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const About = () => (
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="return" to="/"><BsFillArrowLeftSquareFill className="option" /></Link>
        <h3 className="navbar-brand">Air Quality App</h3>
      </div>
    </nav>
    <div className="about">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Qualitative name</th>
            <th scope="col">Index</th>
            <th scope="col" colSpan="6">
              Pollutant concentration in μg/m3
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">&nbsp;</th>
            <td>&nbsp;</td>
            <td>SO2</td>
            <td>NO2</td>
            <td>PM10</td>
            <td>PM2.5</td>
            <td>03</td>
            <td>CO</td>
          </tr>
          <tr>
            <th scope="row">Good</th>
            <td>1</td>
            <td>[0; 20)</td>
            <td>[0; 40)</td>
            <td>[0; 20)</td>
            <td>[0; 10)</td>
            <td>[0; 60)</td>
            <td>[0; 4400)</td>
          </tr>
          <tr>
            <th scope="row">Fair</th>
            <td>2</td>
            <td>[20; 80)</td>
            <td>[40; 70)</td>
            <td>[20; 50)</td>
            <td>[10; 25)</td>
            <td>[60; 100)</td>
            <td>[4400; 9400)</td>
          </tr>
          <tr>
            <th scope="row">Moderate</th>
            <td>3</td>
            <td>[80; 250)</td>
            <td>[70; 150)</td>
            <td>[50; 100)</td>
            <td>[25; 50)</td>
            <td>[100; 140)</td>
            <td>[9400; 12400)</td>
          </tr>
          <tr>
            <th scope="row">Poor</th>
            <td>4</td>
            <td>[250; 350)</td>
            <td>[150; 200)</td>
            <td>[100; 200)</td>
            <td>[50; 75)</td>
            <td>[140; 180)</td>
            <td>[12400; 15400)</td>
          </tr>
          <tr>
            <th scope="row">Very Poor</th>
            <td>5</td>
            <td>⩾350</td>
            <td>⩾200</td>
            <td>⩾200</td>
            <td>⩾75</td>
            <td>⩾180</td>
            <td>⩾15400</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default About;

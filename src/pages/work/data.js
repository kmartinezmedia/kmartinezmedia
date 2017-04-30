import fsu from 'img/fsu.png';
import jantzen from 'img/jantzen.jpg';
import grandslam from 'img/grandslam.png';
import john from 'img/johnhenry.png';
import annualReport from 'img/annual-report.jpg';

const myWorks = [
  { 
    title: "Celmatix",
    image: "public/panels/cmx-logo.svg",
    subdomain: 'cmx',
    type: 'Web',
    position: 'center center',
    size: '40%',
    bgColor: '#fff',
    immediateLink: 'http://celmatix.com/'
  },
  { 
    title: "Perry Ellis International Annual Report",
    image: "public/panels/page2.jpg",
    position: 'top right',
    width: '50%',
    subdomain: 'pei',
    type: 'App',
    size: 'cover',
    bgColor: '#9cd8d8',
    content: 'Using cutting edge web technologies I developed a digital version of the 2014 Annual Report, which is used for potential investors and the Sales team to showcase Perry Ellis Internationals portfolio of brands. Mainly, the interactive application will help drive sales through the embedded E- Commerce shopping experience, will increase customer engagement through a social media portal unique to each brand, and will provide convenience for the Sales and Marketing Departments through its accessibility on the go. The App can be found on the Google Play Store and Apple App Store',
    featureImage: annualReport,
    immediateLink: 'http://kmartinezmedia.com/annualreport/'
  },
  { 
    title: "The Penguin Fit Guides",
    image: "public/panels/logos/opg.svg",
    subdomain: 'opg',
    size: "60%",
    position: 'center',
    type: 'Prototype',
    bgColor: '#C7C6C2',
    immediateLink: 'http://kmartinezmedia.com/opg/'
  },
  { title: "Laundry by Shelli Segal",
    image: "public/panels/laundry_1.jpg",
    subdomain: 'laundry',
    size: "cover",
    position: '80% 0',
    type: 'Web',
    immediateLink: 'http://laundryco.com/'
  },
  { 
    title: "BrandedPalette",
    image: "public/panels/branded_palette.jpg",
    subdomain: 'branded_palette',
    position: 'center center',
    type: 'Prototype',
    size: '50%',
    bgColor: '#FD6366',
    immediateLink: 'http://kmartinezmedia.com/brandedPalette'
  },
  { title: "FSU War Paint 3D Documentary",
    image: fsu,
    position: 'center center',
    size: "cover",
    subdomain: 'fsu',
    type: 'Video',
    size: "40%",
    bgColor: '#DED5B8',
    immediateLink: 'https://vimeo.com/55185299'
  },
  { title: "Savane",
    image: "public/panels/savane.jpg",
    subdomain: 'savane',
    size: "cover",
    type: 'Prototype',
    immediateLink: 'http://savane.com/'
  },
  { 
    title: "NewYou",
    image: "public/panels/newyou.jpg",
    subdomain: 'newyou',
    type: 'App',
    size: '50%',
    position: 'center center',
    bgColor: '#E91E77',
    immediateLink: 'http://kmartinezmedia.com/newyou'
  },
  {
    title: "Jantzen",
    image: "public/panels/jantzen.jpg",
    position: 'right top',
    size: 'cover',
    subdomain: 'jantzen',
    type: 'Web',
    immediateLink: 'http://jantzen.com/'
  },
  {
    title: "John Henry",
    image: "public/panels/perry_ellis_4.jpg",
    subdomain: 'john_henry',
    position: '80% 0',
    width: '100%',
    size: "cover",
    type: 'Web',
    immediateLink: 'http://johnhenry.com/'
  }
];

const newYou =
  { 
    title: "MyJour",
    image: "public/panels/myjour.jpg",
    subdomain: 'myjour',
    type: 'App',
    size: '50%',
    position: 'center center',
    bgColor: '#000'
  };

export {myWorks};
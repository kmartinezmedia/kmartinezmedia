import step1 from 'img/google/step1.jpg';
import step2 from 'img/google/step2.jpg';
import step3 from 'img/google/step3.jpg';
import step5 from 'img/google/step5.jpg';
import step6 from 'img/google/step6.jpg';
import step7 from 'img/google/step7.jpg';
import step8 from 'img/google/step8.jpg';
import step9 from 'img/google/step9.jpg';
import step10 from 'img/google/step10.jpg';
import step11 from 'img/google/step11.jpg';

const research = [
    {
      app: "Instagram",
      caption: "Instagram had the detail page slide in from the left as a new view altogether",
      video: ""
    },
    {
      app: "Facebook",
      caption: "Facebook slightly scaled the grid back, while the thumbnail would symmetrically scale forward",
      video: ""
    },
    {
      app: "Apple Photos",
      caption: "Apple Photos used a similar scaling technique, except the transition was a bit more abrupt",
      video: ""
    },

    {
      app: "Shutterfly",
      caption: "Shutterfly also scaled the thumbnail to detailed view followed by a lightbox fade in",
      video: ""
    }
];

const planningData = [
    {
      caption: "When the user taps on a thumbnail image store this index in global variable",
      image: step1
    },
    {
      caption: "Scale this thumbnail to the middle of screen and fade out grid",
      image: step2
    },
    {
      caption: "Set the active page on the page component to be the active thumbnail index. Swap the page component to be in front of the scaled thumbnail so we can swipe between images",
      image: step3
    },
    {
      caption: "Scale the new active thumbnail to go behind it's corresponding active page",
      image: step5
    },
    {
      caption: "When the user clicks on the close icon, place the page component behind the thumbnail grid.",
      image: step6
    },
    {
      caption: "The active thumbnail is now ready to be transitioned back to its original position on the grid",
      image: step7
    },

    {
      caption: "",
      image: step8
    },

    {
      caption: "",
      image: step9
    }
];

export {research, planningData};
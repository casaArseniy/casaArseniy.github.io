// script.js

const aboutMe = 'Graduated with a  master’s degree in experimental medicine at McGill University. Was involved in research at the Cardiovascular Imaging Group under the supervision of Dr. Matthias Friedrich. My focus was on combining oxygenation-sensitive cardiac magnetic resonance (OS-CMR) image sequences with machine learning to discriminate between cardiac disease states. '
const ResearchInterest = 'My previous research interests were in combining health and machine learning, specifically in using deep learning to improve the efficiency of diagnosis. Deep learning can be used for classification and segmentation of medical images. My previous project involved developing a software pipeline that extracts biomarkers from cardiac MR images and utilizes them for classification. To maximize efficiency, the cardiac images were taken from a single slice of the heart in the short-axis view. This involved the usage of segmentation algorithms to find locations of interest, feature extraction, and feature tracking.'

document.getElementById('AboutMe_text').innerText = aboutMe;
document.getElementById('ResearchInterest_text').innerText = ResearchInterest;

// window.addEventListener('load', () => {
//     const leftColumn = document.querySelector('#AboutMe_text');
//     const rightColumn = document.querySelector('#AboutMe_img');
  
//     // Get the computed height of the left column
//     const leftColumnHeight = window.getComputedStyle(leftColumn).getPropertyValue('height');
  
//     // Set the height of the right column to match the left column
//     rightColumn.style.height = leftColumnHeight;
//   });

const cloud_name = "dg3k5pgji";

// New trail handler
async function newTrailHandler(event) {
  event.preventDefault();

  const trail_name = document.querySelector('input[name="trail-name"]').value;
  const city = document.querySelector('input[name="trail-city"]').value;
  const state = document.querySelector('input[name="trail-state"]').value;
  const distance_miles = document.querySelector('input[name="trail-miles"]').value;
  const description = document.querySelector('input[name="trail-description"]').value;

  const response = await fetch(`api/trails`, {
      method: 'POST',
      body: JSON.stringify({
          trail_name: trail_name,
          city: city,
          state: state,
          distance_miles: distance_miles,
          description: description
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  });
  if(response.ok) {
      document.location.replace('/dashboard');
  } else {
      alert(response.statusText);
  }
};

function goToGallery(event) {
  event.preventDefault();
  console.log('Arrived at goToGallery function');
};




async function addImgToDB(imgID) {
  const image_url = `https://res.cloudinary.com/${cloud_name}/image/upload/${imgID}.jpg`;
  const description = document.querySelector('input[name="img-description"]').value;
  
  const response = await fetch(`/api/images`, {
    method: 'POST',
    body: JSON.stringify({
      image_url,
      description
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/gallery');
  } else {
    alert(response.statusText);
  }
};

// Citation: from Cloudinary widget use documentation
const myWidget = cloudinary.createUploadWidget({
  cloudName: cloud_name, 
  uploadPreset: 'uwvcxasv'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
      const imgID = result.info["public_id"];
      addImgToDB(imgID);
    }
  }
);

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);
  // End citation
document.querySelector('.new-trail-form').addEventListener('submit', newTrailHandler);

async function editFormHandler(event) {
    event.preventDefault();
  
    const trail_name = document.querySelector('input[name="trail-name"]').value.trim();
    const city = document.querySelector('input[name="city"]').value.trim();
    const state = document.querySelector('input[name="state"]').value.trim();
    const distance_miles = document.querySelector('input[name="distance_miles"]').value.trim();
    const description = document.getElementById('trail-description').value.trim();
    const id1 = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const id = id1.charAt(0);

    const response = await fetch(`/api/trails/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        trail_name,
        city,
        state,
        distance_miles,
        description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-trail-form').addEventListener('submit', editFormHandler);
  
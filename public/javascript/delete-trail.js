async function deleteFormHandler(event) {
    event.preventDefault();
    const id1 = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      const id = id1.charAt(0);

      const response = await fetch(`/api/trails/${id}`, {
        method: 'DELETE'
      });
    
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('.delete-trail-btn').addEventListener('click', deleteFormHandler);
window.addEventListener('load', ()=>{


    // Box basic functions start
    const boxIdContainer = document.getElementById('box-id-container')
    const boxId = document.getElementById('box-id')
    const boxIdinput = document.getElementById('input')
    const boxIdForm = document.getElementById('box-id-form')
    
    

    boxIdForm.addEventListener('submit', (e)=>{
  
        e.preventDefault()

        let numInput = boxIdinput.value
        boxId.innerText = numInput
        boxId.innerHTML = boxId.innerText
        boxIdForm.classList.toggle('hidden')
        boxId.classList.add('box-id-grow')
        boxIdContainer.addEventListener("click", e =>{
            if (boxIdForm.className === ('hidden')){
                boxIdForm.classList.toggle('hidden')
                boxId.classList.remove('box-id-grow')
            }

            
        })
    })

    const dateContainer = document.getElementById('date-container')
    const date = document.getElementById('date')
    const dateForm = document.getElementById('date-form')
    const dateInput = document.getElementById('date-input')

    dateForm.addEventListener('submit', e=>{
        e.preventDefault()

        newDate = dateInput.value;
        date.innerHTML = newDate
        dateForm.classList.toggle('hidden')
        dateContainer.addEventListener("click", e=>{
            if (dateForm.className === ('hidden')){
                dateForm.classList.toggle('hidden')
            }
        })
        
    })

    const nameContainer = document.getElementById('name-container')
    const name = document.getElementById('name')
    const nameForm = document.getElementById('name-form')
    const nameInput = document.getElementById('name-input')

    nameForm.addEventListener('submit', e=>{
        e.preventDefault()

        newName = nameInput.value;
        name.innerHTML = newName
        nameForm.classList.toggle('hidden')
        nameContainer.addEventListener("click", e=>{
            if (nameForm.className === ('hidden')){
                nameForm.classList.toggle('hidden')
            }
        })
        
    })

    const durationContainer = document.getElementById('duration-container')
    const duration = document.getElementById('duration')
    const durationForm = document.getElementById('duration-form')
    const durationInput = document.getElementById('duration-input')

    console.log(duration)
    console.log(durationContainer)
    console.log(durationForm)
    console.log(durationInput)

    durationForm.addEventListener('submit', e=>{
        e.preventDefault()

        newDuration = durationInput.value;
        duration.innerHTML = newDuration
        durationForm.classList.toggle('hidden')
        durationContainer.addEventListener("click", e=>{
            if (durationForm.className === ('hidden')){
                durationForm.classList.toggle('hidden')
            }
        })
    })

    activityContainer = document.getElementById('activity-container')
    newBox = document.getElementById('new-box')

    console.log(newBox)
    newBox.addEventListener('click', newBox =>{

     activityBox = document.createElement('section')
       activityBox.classList.add('activity-box')
        activityContainer.appendChild(activityBox)

    })
})






{/* <section class="activity-container">
<!-- Activity box -->
<section class="activity-box">

    <section class="activity-box-top activity-box-items">

          <!-- Box id -->

        <section class="box-id-container" id="box-id-container">
        
            <form action="" id="box-id-form">
                <input type="text"
                placeholder="Enter the number" class="box-id-input " id="input">
                <input type="submit"
                value="Save">
            </form>

            <span id="box-id" class="box-id">#</span>
        
        </section>

    <!-- date -->

        <section class="date-container" id="date-container">
            <form action="" id="date-form">
                <input type="text" class="date-input" id="date-input" placeholder="Ex. 01/01/2024">
                <input type="submit">
            </form>
            <span id="date">3/10/2024</span>

        </section>

    </section>
 

<!-- name -->
    
<section class="activity-box-items name-container" id="name-container">
 
    <form action="" id="name-form">
        <input 
        type="text"
        placeholder="Name me"
        id="name-input">

        <input 
            type="submit"
            value="Save">
    </form>


    <span id="name">

            Build app
 
    </span>

</section>

<!-- duration box -->
    <section class="duration-container activity-box-items" id="duration-container">

        <form action="" id="duration-form">
            <input 
            type="text"
            placeholder="Name me"
            id="duration-input">

            <input 
                type="submit"
                value="Save">
        </form>

        <span id="duration">
            3
        </span>

        <span>
            Days
        </span>
</section>
</section> */}






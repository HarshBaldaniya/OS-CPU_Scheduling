introJs().setOptions({ 
        steps: [
            {
                title: "Hello World!",
                intro: "Welcome to our CPU scheduling simulation; I'm your tour guide; click <b>\"next\"</b> to begin.",
            },
            {
                element: document.querySelector(".step-1"),
                intro: "This is our home button; if you want to return to the main page while in any phase of the simulation, click here. ⬆",
            },
            {
                element: document.querySelector("#step-2"),
                intro: "This prompt informs us about CPU scheduling, which is a critical feature for operating systems to function properly.",
            },
            {
                element: document.querySelector("#step-3"),
                intro: "Here are the four algorithms we have implemented , lets get to know each one",
            },
            {
                element: document.querySelector("#step-4"),
                intro: "First Come First Serve (FCFS) is an operating system scheduling algorithm that automatically executes queued requests and processes in order of their arrival.Hover on <b>More Info</b> to explore it further.",
            },
            {
                element: document.querySelector("#step-5"),
                intro: "Shortest Remaining Time First (SRTF) is the preemptive version of Shortest Job Next (SJN) algorithm, where the processor is allocated to the job closest to completion. Hover on <b>More Info</b> to explore it further.",
            },
            {
                element: document.querySelector("#step-6"),
                intro: "Shortest job first (SJF) or shortest job next, is a scheduling policy that selects the waiting process with the smallest execution time to execute next.Hover on <b>More Info</b> to explore it further.",
            },
            {
                element: document.querySelector("#step-7"),
                intro: "Longest Job First (LJF) is a non-preemptive scheduling algorithm. This algorithm is based upon the burst time of the processes.Hover on <b>More Info</b> to explore it further.",
            },
            {
                element: document.querySelector("#step-8"),
                intro: "We are the people who made this. ",
            },
        ],
        showProgress: true,
        disableInteraction: true,
        tooltipClass: 'customTooltip',
        showBullets: false,
    }).oncomplete(() => {
        alert("Thats all , please explore all the siumulations; you can summon the guided tour at any moment by pressing the guided tour button.");
    }).start();
    


    

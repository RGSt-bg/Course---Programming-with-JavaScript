function colorize() {

    // Въпреки всичките ми жалки опити, гадният Judge продължава да ми блъска грешка,
    // макар че решението ми не се различава много от това в презентацията!    
        
        // let rows = document.querySelectorAll("table tr");
    
        // for (let i = 0; i < rows.length; i++) {
    
        //     if (i % 2 === 0) eval(rows[i+1]).style.background = "teal";
        // }
    
        let rows = document.querySelectorAll("table tr");
        let index = 0;
    
        for (let row of rows) {
            index++;
            if (index % 2 == 0)
                row.style.background = "teal";
        }    
    }
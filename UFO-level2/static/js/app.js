// from data.js
const tableData = data;

// Gets table references with d3.select()
const tbody = d3.select("tbody");

// Appends the data into the table by looping each record at a time
function buildTable(sightingReport) {

   // clear out any existing data in tbody
  //tbody.html("");

  var record = sightingReport
  var row = tbody.append('tr')
  row.append('td').text(record.datetime)
  row.append('td').text(record.city)
  row.append('td').text(record.state)
  row.append('td').text(record.country)
  row.append('td').text(record.shape)
  row.append('td').text(record.durationMinutes)
  row.append('td').text(record.comments)
};

data.forEach(buildTable);

// Prints data and user gets a glimpse of what data looks like
console.log(data);

// Event listeners
// Selected when a filter option is selected & when a filter button is clicked
var listOption = d3.select("#filter-item");
var filterButton = d3.select('filter-btn');

// Executes when a filter option has been selected
// Modifies the text of filter-item id (line 51 in index.html) depensing on the filter option selected
// 
function selectOption(item) {
console.log(item)
  var selectedOption = item.value;

    if(selectedOption == "date")
    {
      listOption.text("Enter a date");
      document.getElementById('useroption');
    }
    else if(selectedOption == 'city')
    {
      listOption.text("Enter a City");
      document.getElementById('useroption')
    }
    else if(selectedOption == "state")
    {
      listOption.text("Enter a State");
      document.getElementById('useroption');
    }
    else if(selectedOption == "country")
    {
      listOption.text("Enter a Country");
      document.getElementById('useroption');
    }
    else if(selectedOption == "shape")
    {
      listOption.text("Enter a Shape")
      document.getElementById('useroption');
    };

};

function handleClick() {
    // Prevents page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node 
    var userInputElement= d3.selectAll('.form-control');

    // Get the value of user input and transform to lowercase since UFO data has it all in lowercase
    var inputValue = userInputElement.property('value').toLowerCase()
    
    console.log(inputValue);

    const element = document.getElementById("filter-choices");
    var selectedOption = element.option[itemIndex].value;

    if(selectedOption == "date")
    {
        var filteredData = data.filter(i => i.date === inputValue);
    }
    else if(selectedOption == 'city')
    {
        var filteredData = data.filter(i => i.city === inputValue);
    }
    else if(selectedOption == "state")
    {
        var filteredData = data.filter(i => i.state === inputValue); 
    }
    else if(selectedOption == "country")
    {
        var filteredData = data.filter(i => i.country === inputValue);
    }
    else if(selectedOption == "shape")
    {
        var filteredData = data.filter(i => i.shape === inputValue); 
    }

    console.log(filteredData);
    
    tbody.html("");
    
    filteredData.forEach(buildTable);
};
// event handler of the form button
// when filter button is clicked, then handleClick function is called
filterButton.on('click', handleClick);


console.log(data);


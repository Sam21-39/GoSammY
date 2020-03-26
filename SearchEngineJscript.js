function search() {
	var key= document.getElementById("search_input").value;
	url ='http://www.google.com/search?q=' + key;
	localStorage.setItem('link',url);
	window.open('SearchResults.html','_self');

}

function SearchResult() {
	v=localStorage.getItem('link');
	document.getElementById("result").setAttribute('src','http://www.google.com');
}

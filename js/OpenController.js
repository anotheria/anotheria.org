var href = {
	"0": "http://jira.com",
	"1": "http://jira.com",
	"2": "http://jira.com",
	"3": "http://jira.com",
	"4": "http://jira.com",
	"5": "http://jira.com"
};
$(function() {
	$('.center a').click(function() {
		var h = $(this).attr('href');
		window.location=href[h];
		return false;
	})
});
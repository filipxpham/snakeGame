function setActive(index) {
	$(".nav").children("li").eq(index).children("a").addClass("active");
}
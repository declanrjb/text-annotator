/* actual script */
var classname = ".note";

var annot_name = ".annotation";

var elms=document.querySelectorAll(classname);

var annotations = document.querySelectorAll(annot_name);
var annotation = annotations[0];

var annot_paragraph = annotation.querySelector("p");

for(var i=0;i<elms.length;i++){
    elms[i].onclick = function(){

        annotation.style.transitionDuration = "1s";

        var new_annotation = annotations_dict[this.textContent];

        annot_paragraph.textContent = new_annotation;

        var annotation_position = annotation.getBoundingClientRect();

        var mid_height = annotation_position.height / 2;

        var self_position = this.getBoundingClientRect();
        var self_y_formatted = self_position.y - mid_height + 10;

        self_y_formatted = self_y_formatted.toString();
        self_y_formatted = self_y_formatted.concat("px");

        annotation.style.top = self_y_formatted;

    };
}

if (elms.length > 0) {
    annotation.style.transitionDuration = "0s";

    var curr = elms[0];

    var new_annotation = annotations_dict[curr.textContent];

    annot_paragraph.textContent = new_annotation;

    var annotation_position = annotation.getBoundingClientRect();

    var mid_height = annotation_position.height / 2;

    var self_position = curr.getBoundingClientRect();
    var self_y_formatted = self_position.y - mid_height + 10;

    self_y_formatted = self_y_formatted.toString();
    self_y_formatted = self_y_formatted.concat("px");

    annotation.style.top = self_y_formatted;
}


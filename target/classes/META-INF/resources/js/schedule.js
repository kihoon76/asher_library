$(function(){
	var modalHtml = [];
	modalHtml.push('<input type="text" id="startDatepicker">');
	
	function _openModal() {
		
		modal({
			type: 'inverted', //Type of Modal Box (alert | confirm | prompt | success | warning | error | info | inverted | primary)
			title: 'Message', //Modal Title
			text: modalHtml.join(''), //Modal HTML Content
			size: 'normal', //Modal Size (normal | large | small)
			buttons: [{
				text: 'OK', //Button Text
				val: 'ok', //Button Value
				eKey: true, //Enter Keypress
				addClass: 'btn-light-blue', //Button Classes (btn-large | btn-small | btn-green | btn-light-green | btn-purple | btn-orange | btn-pink | btn-turquoise | btn-blue | btn-light-blue | btn-light-red | btn-red | btn-yellow | btn-white | btn-black | btn-rounded | btn-circle | btn-square | btn-disabled)
				onClick: function(dialog) {
					console.log(dialog);
					alert('Look in console!');
					return true;
				}
			}, ],
			center: true, //Center Modal Box?
			autoclose: false, //Auto Close Modal Box?
			callback: null, //Callback Function after close Modal (ex: function(result){alert(result); return true;})
			onShow: function(r) {}, //After show Modal function
			closeClick: true, //Close Modal on click near the box
			closable: true, //If Modal is closable
			theme: 'atlant', //Modal Custom Theme (xenon | atlant | reseted)
			animate: false, //Slide animation
			background: 'rgba(0,0,0,0.35)', //Background Color, it can be null
			zIndex: 1050, //z-index
			buttonText: {
				ok: 'OK',
				yes: 'Yes',
				cancel: 'Cancel'
			},
			template: '<div class="modal-box"><div class="modal-inner"><div class="modal-title"><a class="modal-close-btn"></a></div><div class="modal-text"></div><div class="modal-buttons"></div></div></div>',
			_classes: {
				box: '.modal-box',
				boxInner: ".modal-inner",
				title: '.modal-title',
				content: '.modal-text',
				buttons: '.modal-buttons',
				closebtn: '.modal-close-btn'
			}
		});
		
		$( '#startDatepicker' ).datepicker({
	        showOn: "both", 
	        buttonImage: "button.png", 
	        buttonImageOnly: true 
		});
	}
	
	$(document).on('click', '.fc-prev-button', function(e){
		var moment = $('#dvCalendar').fullCalendar('getDate');
		console.log(moment)
	    alert("The current date of the calendar is " + moment.format());
	});

	$(document).on('click', '.fc-next-button', function(){
	   alert('nextis clicked, do something');
	});
		
	$('#dvCalendar').fullCalendar({
		eventClick: function(calEvent, jsEvent, view) {
			console.log(calEvent);
		},
		dayClick: function(date, jsEvent, view) {
			console.log(date);
			console.log(jsEvent)
			_openModal();
		},
		customButtons: {
			myCustomButton: {
				text: '저장',
	            click: function() {
	                alert('clicked the custom button!');
	            }
			},
		},
		header: {
			left: 'prev,next today myCustomButton',
		    center: 'title',
		    right: 'month,basicWeek,basicDay'
		},
	    defaultDate: '2017-12-12',
	    navLinks: true, // can click day/week names to navigate views
	    editable: true,
	    eventLimit: true, // allow "more" link when too many events
	      events: [
	        {
	          title: 'All Day Event',
	          start: '2017-12-01'
	        },
	        {
	          title: 'Long Event',
	          start: '2017-12-07',
	          end: '2017-12-10'
	        },
	        {
	          id: 999,
	          title: 'Repeating Event',
	          start: '2017-12-09T16:00:00'
	        },
	        {
	          id: 999,
	          title: 'Repeating Event',
	          start: '2017-12-16T16:00:00'
	        },
	        {
	          title: 'Conference',
	          start: '2017-12-11',
	          end: '2017-12-13'
	        },
	        {
	          title: 'Meeting',
	          start: '2017-12-12T10:30:00',
	          end: '2017-12-12T12:30:00'
	        },
	        {
	          title: 'Lunch',
	          start: '2017-12-12T12:00:00'
	        },
	        {
	          title: 'Meeting',
	          start: '2017-12-12T14:30:00'
	        },
	        {
	          title: 'Happy Hour',
	          start: '2017-12-12T17:30:00'
	        },
	        {
	          title: 'Dinner',
	          start: '2017-12-12T20:00:00'
	        },
	        {
	          title: 'Birthday Party',
	          start: '2017-12-13T07:00:00'
	        },
	        {
	          title: 'Click for Google',
	          url: 'http://google.com/',
	          start: '2017-12-28'
	        }
	      ]
	});
});
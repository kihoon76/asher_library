$(function(){
	var modalHtml = [];
	modalHtml.push('<div class="container">');
	modalHtml.push('	<form id="contact" action="" method="post">');
	modalHtml.push('	    <div class="row">');
	modalHtml.push('	    	<div class="column">');
	modalHtml.push('	    		<fieldset>');
	modalHtml.push('	    			<input type="text" id="startDatepicker" tabindex="1" placeholder="시작일">');
	modalHtml.push('				</fieldset>');
	modalHtml.push('			</div>');
	modalHtml.push('	    	<div class="column">');
	modalHtml.push('	    		<fieldset>');
	modalHtml.push('	    			<input type="text" id="endDatepicker" tabindex="2" placeholder="종료일">');
	modalHtml.push('				</fieldset>');
	modalHtml.push('			</div>');
	modalHtml.push('		</div>');
	modalHtml.push('	    <fieldset>');
	modalHtml.push('			<input type="text" tabindex="3" placeholder="제목" id="txtTitle">');
	modalHtml.push('	    </fieldset>');
	modalHtml.push('	    <fieldset>');
	modalHtml.push('			<select tabindex="4" id="selTime">');
	modalHtml.push('				<option value="">-- 사간을 설정하세요 --</option>');
	modalHtml.push('				<option value="T00:00:00">00:00</option>');
	modalHtml.push('				<option value="T01:00:00">01:00</option>');
	modalHtml.push('				<option value="T02:00:00">02:00</option>');
	modalHtml.push('				<option value="T03:00:00">03:00</option>');
	modalHtml.push('				<option value="T04:00:00">04:00</option>');
	modalHtml.push('				<option value="T05:00:00">05:00</option>');
	modalHtml.push('				<option value="T06:00:00">06:00</option>');
	modalHtml.push('				<option value="T07:00:00">07:00</option>');
	modalHtml.push('				<option value="T08:00:00">08:00</option>');
	modalHtml.push('				<option value="T09:00:00">09:00</option>');
	modalHtml.push('				<option value="T10:00:00">10:00</option>');
	modalHtml.push('				<option value="T11:00:00">11:00</option>');
	modalHtml.push('				<option value="T12:00:00">12:00</option>');
	modalHtml.push('				<option value="T13:00:00">13:00</option>');
	modalHtml.push('				<option value="T14:00:00">14:00</option>');
	modalHtml.push('				<option value="T15:00:00">15:00</option>');
	modalHtml.push('				<option value="T16:00:00">16:00</option>');
	modalHtml.push('				<option value="T17:00:00">17:00</option>');
	modalHtml.push('				<option value="T18:00:00">18:00</option>');
	modalHtml.push('				<option value="T19:00:00">19:00</option>');
	modalHtml.push('				<option value="T20:00:00">20:00</option>');
	modalHtml.push('				<option value="T21:00:00">21:00</option>');
	modalHtml.push('				<option value="T22:00:00">22:00</option>');
	modalHtml.push('				<option value="T23:00:00">23:00</option>');
	modalHtml.push('			</select>');
	modalHtml.push('	    </fieldset>');
	modalHtml.push('		<fieldset>');
	modalHtml.push('			<div class="squaredThree">');
	modalHtml.push('				<input type="checkbox" tabindex="5" id="chkAllday">');
	modalHtml.push('				<label for="chkAllday"></label>');
	modalHtml.push('			</div>');
	modalHtml.push('			<span class="allday">하루종일</span>');
	modalHtml.push('		</fieldset>');
	modalHtml.push('	</form>');
	modalHtml.push('</div>');
	
	var _picker = {
		dateFormat: 'yy-mm-dd'	
	}
	
	function _addShedule() {
		var source = [];
		var title = $('#txtTitle').val();
		var start = $('#startDatepicker').val();
		var end = $('#endDatepicker').val();
		var event = {
			title: title,
			start: start
		};
		var isAllDay = $('#chkAllday').is(':checked');
		if(isAllDay) {
			
		}  
		
		if(end) {
			event.end = end;
		}
		
		if($('#selTime').val()) {
			event.start = event.start + $('#selTime').val(); 
		}
		
		source.push(event);
		$('#dvCalendar').fullCalendar('addEventSource', source);
	}
	
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
					_addShedule();
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
		
		$('#startDatepicker' ).datepicker(_picker);
		$('#endDatepicker' ).datepicker(_picker);
	}
	
	function _save() {
		var arr = $('#dvCalendar').fullCalendar('getEventSources');
		
		if(arr[0]) {
			var sources = arr[0].rawEventDefs;
			console.log(sources);
		}
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
	                _save();
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
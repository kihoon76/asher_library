<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c"	uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<head>
	<title></title>
 	<!-- Bootstrap -->
    <link rel="stylesheet" href="/resources/os/bootstrap/3.3.7-1/css/bootstrap.min.css" />
</head>
<body>
	<table class="table" style="width:100%">
		<tr>
			<td>
  				<form class="form-inline">
  					<label class="sr-only" for="worshipTitle">Name</label>
  					<input type="text" class="form-control" id="worshipTitle" placeholder="말씀제목" style="width:100%;">
				</form>
			</td>
		</tr>
		<tr>
			<td>
				<form class="form-inline">
  					<select class="form-control" id="selBibleFromInAdd">
		 				<option value="" selected> -- 선택 -- </option>
				    	<c:forEach items="${list}" var="bible">
				    	<option value="${bible.bibleNum}" data-chapters="${fn:length(bible.list)}" data-config='${bible.gsonList}'>${bible.bibleLongLabel}</option>
				    	</c:forEach>
					</select>
					
					<div class="input-group">
						<select class="form-control" id="selChapterFromInAdd"></select>
	    				<div class="input-group-addon">장</div>
	    			</div>
	    			
	    			<div class="input-group"> 
 						<select class="form-control" id="selParagraphFromInAdd"></select> 
 	    				<div class="input-group-addon">절</div> 
 	    			</div>
 	    			
 	    			~
 	    			
 	    			<select class="form-control" id="selBibleToInAdd"> 
		 				<option value="" selected> -- 선택 -- </option>
		  				<c:forEach items="${list}" var="bible">
				    	<option value="${bible.bibleNum}" data-chapters="${fn:length(bible.list)}" data-config='${bible.gsonList}'>${bible.bibleLongLabel}</option>
				    	</c:forEach>
					</select>
					
					<div class="input-group"> 
						<select class="form-control" id="selChapterToInAdd"></select>
	    				<div class="input-group-addon">장</div>
	  				</div>
	  				
	  				 <div class="input-group">
	  				 	<select class="form-control" id="selParagraphToInAdd"></select>
	    				<div class="input-group-addon">절</div>
	  				</div>
				</form>
			</td>
		</tr>
		<tr>
			<td>
				<textarea id="worshipEditor" style="max-width: 100%;">
				</textarea>
			</td>
		</tr>
		<tr>
			<td>
				<button class="btn btn-success" id="btnNoticeReg">등록</button>
			</td>
		</tr>
	</table>

	<content tag="script">
	<script type="text/javascript" src="/resources/os/bootstrap/3.3.7-1/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="/resources/os/ckeditor/ckeditor.js"></script> 
	<script type="text/javascript" src="/resources/js/if/worship.js"></script>
	</content>
</body>
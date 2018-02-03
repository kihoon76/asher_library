<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c"	uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<head>
	<title></title>
 	<!-- Bootstrap -->
    <link rel="stylesheet" href="/resources/os/bootstrap/3.3.7-1/css/bootstrap.min.css" />
</head>
<body>
	<table class="table">
		<tr>
			<td>
  				<form class="form-inline">
  					<label class="sr-only" for="worshipTitle">Name</label>
  					<input type="text" class="form-control" id="worshipTitle" placeholder="말씀제목">
  					<label class="sr-only" for="inlineFormCustomSelect"> 말씀구절</label>
  					<select class="form-control" id="inlineFormCustomSelect">
    					<option selected>Choose...</option>
					    <option value="1">One</option>
					    <option value="2">Two</option>
					    <option value="3">Three</option>
					</select>
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
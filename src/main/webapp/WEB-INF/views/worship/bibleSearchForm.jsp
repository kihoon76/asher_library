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
	<colgroup>
		<col width="20%" />
		<col width="15%" />
		<col width="15%" />
		<col width="20%" />
		<col width="15%" />
		<col width="15%" />
	</colgroup>
	<tr>
		<td>
 			<select class="form-control" id="selBibleFrom">
 				<option value="" selected> -- 선택 -- </option>
		    	<c:forEach items="${list}" var="bible">
		    	<option value="${bible.bibleNum}" data-chapters="${fn:length(bible.list)}" data-config='${bible.gsonList}'>${bible.bibleLongLabel}</option>
		    	</c:forEach>
			</select>
		</td>
		<td>
			 <div class="input-group">
				<select class="form-control" id="selChapterFrom"></select>
    			<div class="input-group-addon">장</div>
  			</div>
		</td>
		<td>
			 <div class="input-group">
				<select class="form-control" id="selParagraphFrom"></select>
    			<div class="input-group-addon">절</div>
  			</div>
		</td>
		<td>
 			<select class="form-control" id="selBibleTo">
 				<option value="" selected> -- 선택 -- </option>
  				<c:forEach items="${list}" var="bible">
		    	<option value="${bible.bibleNum}" data-chapters="${fn:length(bible.list)}" data-config='${bible.gsonList}'>${bible.bibleLongLabel}</option>
		    	</c:forEach>
			</select>
		</td>
		<td>
			 <div class="input-group">
				<select class="form-control" id="selChapterTo"></select>
    			<div class="input-group-addon">장</div>
  			</div>
		</td>
		<td>
			 <div class="input-group">
				<select class="form-control" id="selParagraphTo"></select>
    			<div class="input-group-addon">절</div>
  			</div>
		</td>
	</tr>
	<tr>
		<td colspan="6">
			<button class="form-control btn btn-primary" id="btnBibleSearch">검색</button>
		</td>
	</tr>
	<tr>
		<td colspan="6">
			<div id="dvBibleSearchResult" style="width:100%; height:200px;"></div>
		</td>
	</tr>
	
</table>
<content tag="script">
<script type="text/javascript" src="/resources/os/bootstrap/3.3.7-1/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/resources/js/if/bibleSearch.js"></script>
</content>
</body>
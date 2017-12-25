<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c"	uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="req" value="${pageContext.request}" />
<c:set var="url">${req.requestURL}</c:set>
<c:set var="uri" value="${req.requestURI}" />
<head>
	<title></title>
	<link rel="stylesheet" href="/resources/os/fullcalendar-3.8.0/fullcalendar.min.css" />
	<link rel="stylesheet" href="/resources/os/fullcalendar-3.8.0/fullcalendar.print.min.css" media="print"/>
	<style>
	  body {
	    margin: 40px 10px;
	    padding: 0;
	    font-family: "Lucida Grande",Helvetica,Arial,Verdana,sans-serif;
	    font-size: 14px;
	  }
	
	  #calendar {
	    max-width: 900px;
	    margin: 0 auto;
	  }
	</style>
</head>
<body>
	<div id="dvCalendar"></div>
	<content tag="script">
	<script type="text/javascript" src="/resources/os/fullcalendar-3.8.0/lib/moment.min.js"></script>
	<script type="text/javascript" src="/resources/os/jquery.min.js"></script>
	<script type="text/javascript" src="/resources/os/fullcalendar-3.8.0/fullcalendar.min.js"></script>
	<script type="text/javascript" src="/resources/os/fullcalendar-3.8.0/locale/ko.js"></script>
	<script type="text/javascript" src="/resources/js/schedule.js"></script>
	</content>
</body>
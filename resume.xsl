<?xml version="1.0" encoding="UTF-8"?>

<xsl:transform version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="5" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">

<html>
	<head>
		<title><xsl:value-of select="resume/name" /></title>
		<link rel="stylesheet" type="text/css" href="resume.css" />
		<script src="resume.js" defer="defer"></script>
	</head>
	
	<body>
		<form>
			<fieldset>
				<legend style="font-size: 2em; font-weight: bold;"><xsl:value-of select="resume/name" /></legend>
				<div class="sub-section">
					<div style="float: left;">
						<div>
							<span>Linked in: </span>
							<a target="_blank">
								<xsl:attribute name="href">
									<xsl:value-of select="resume/linkedin" />
								</xsl:attribute>
								<xsl:value-of select="resume/linkedin" />
							</a>
						</div>
						
						<div>
							<span>Portfolio: </span>
							<a target="_blank">
								<xsl:attribute name="href">
									<xsl:value-of select="resume/portfolio" />
								</xsl:attribute>
								
								<xsl:value-of select="resume/portfolio" />
							</a>
						</div>
					</div>
					
					<!-- revealed before printing -->
					<div id="contact-info" style="float: right; clear: right;">
						<div id="email">
							<xsl:attribute name="local">
								<xsl:value-of select="resume/email/local" />
							</xsl:attribute>

							<xsl:attribute name="domain">
								<xsl:value-of select="resume/email/domain" />
							</xsl:attribute>
						</div>

						<div id="phone">
							<xsl:attribute name="area">
								<xsl:value-of select="resume/phone/area" />
							</xsl:attribute>

							<xsl:attribute name="office">
								<xsl:value-of select="resume/phone/office" />
							</xsl:attribute>

							<xsl:attribute name="line">
								<xsl:value-of select="resume/phone/line" />
							</xsl:attribute>
						</div>
					</div>
				</div>
			</fieldset>
			
			<fieldset>
				<legend>Qualifications</legend>
				<div class="sub-section">
					<div class="extra-bottom-space">
						<span><strong>Summary: </strong><xsl:value-of select="resume/qualifications/summary" /></span>
					</div>
					
					<div class="extra-bottom-space">
						<span><strong>Languages: </strong><xsl:value-of select="resume/qualifications/languages" /></span>
					</div>
					
					<div>
						<span><strong>Recent Technologies: </strong><xsl:value-of select="resume/qualifications/technologies" /></span>
					</div>
				</div>
			</fieldset>
			
			<fieldset>
				<legend>Experience</legend>
				<div class="sub-section">
					<xsl:for-each select="resume/work_experience/job">
					<div class="item">
						<div>
							<div style="width: 33%; display: inline-block; vertical-align: top;">
								<span class="item-heading"><xsl:value-of select="company" /></span>
							</div>
							
							<div style="width: 33%; display: inline-block; text-align: center; vertical-align: top;">
								<xsl:for-each select="locations/location">
									<xsl:if test="position() > 1">
										<span> | </span>
									</xsl:if>
									
									<span><xsl:value-of select="." /></span>
								</xsl:for-each>
							</div>
							
							<div style="width: 32%; display: inline-block; text-align: right; vertical-align: top;">
								<span><xsl:value-of select="date" /></span>
							</div>
						</div>
						<div class="sub-section">
							<h3><xsl:value-of select="position" /></h3>
							
							<xsl:for-each select="role">
							<div class="item">
								<div><em><xsl:value-of select="department" /></em></div>
								<div style="clear: both;">
									<span style="margin-right: 25px;"><xsl:value-of select="title" /></span>
									<span style=""><xsl:value-of select="tools" /></span>
								</div>
								
								<ul>
									<xsl:for-each select="tasks/task">
										<li><xsl:value-of select="." /></li>
									</xsl:for-each>
								</ul>
							</div>
							</xsl:for-each>
						</div>
					</div>
					
					<xsl:if test="position() != last()">
						<hr />
					</xsl:if>
					</xsl:for-each>
				</div>
			</fieldset>
			
			<fieldset>
				<legend>Education</legend>
				<div class="sub-section">
					<xsl:for-each select="resume/education/university">
					<div class="item">
						<div>
							<div style="width: 33%; display: inline-block;">
								<span class="item-heading"><xsl:value-of select="school" /></span>
							</div>
							
							<div style="width: 33%; display: inline-block; text-align: center;">
								<span><xsl:value-of select="location" /></span>
							</div>
							
							<div style="width: 32%; display: inline-block; text-align: right;">
								<span><xsl:value-of select="date" /></span>
							</div>
						</div>
						
						<div class="sub-section">
							<xsl:for-each select="degree">
							<div>
								<strong><xsl:value-of select="." /></strong>
							</div>
							</xsl:for-each>
							
							<xsl:for-each select="certificate">
							<div>
								<span>Certificate: <xsl:value-of select="." /></span>
							</div>
							</xsl:for-each>
							
							<xsl:for-each select="other">
							<div>
								<span><em><xsl:value-of select="." /></em></span>
							</div>
							</xsl:for-each>
						</div>
					</div>
					
					<xsl:if test="position() != last()">
						<hr />
					</xsl:if>
					</xsl:for-each>
				</div>
			</fieldset>
		</form>
	</body>
</html>

</xsl:template>
</xsl:transform>

<?xml version="1.0" encoding="UTF-8"?>

<xsl:transform version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="5.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">

<html>
	<head>
		<title><xsl:value-of select="resume/name" /></title>
		<link rel="stylesheet" type="text/css" href="resume.css" />
	</head>
	
	<body style="max-width: 21cm; margin-left: auto; margin-right: auto;">
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
					
					<div style="float: right; clear: right;">
						<div>
							<span>E-mail: </span>
							<a>
								<xsl:attribute name="href">
									mailto:<xsl:value-of select="resume/email" />
								</xsl:attribute>
								<xsl:value-of select="resume/email" />
							</a>
						</div>
						
						<div><span>Phone: <xsl:value-of select="resume/phone" /></span></div>
					</div>
				</div>
			</fieldset>
			
			<fieldset>
				<legend>Qualifications</legend>
				<div class="sub-section">
					<div class="extra-bottom-space">
						<span><strong>Summary: </strong><xsl:value-of select="resume/qualifications" /></span>
					</div>
					<div>
						<span><strong>Languages: </strong><xsl:value-of select="resume/languages" /></span>
					</div>
				</div>
			</fieldset>
			
			<fieldset>
				<legend>Experience</legend>
				<div class="sub-section">
					<xsl:for-each select="resume/work_experience/job">
					<div class="item">
						<div>
							<div style="width: 48%; display: inline-block;">
								<span class="item-heading"><xsl:value-of select="company" /></span>
							</div>
							
							<div style="width: 25%; display: inline-block;">
								<span><xsl:value-of select="location" /></span>
							</div>
							
							<div style="width: 25%; display: inline-block;">
								<span style="float: right;"><xsl:value-of select="date" /></span>
							</div>
						</div>
						<hr />
						<div class="sub-section">
							<h4><xsl:value-of select="position" /></h4>
							
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
					</xsl:for-each>
				</div>
			</fieldset>
			
			<fieldset>
				<legend>Education</legend>
				<div class="sub-section">
					<xsl:for-each select="resume/education/university">
					<div class="item">
						<div>
							<div style="width: 48%; display: inline-block;">
								<span class="item-heading"><xsl:value-of select="school" /></span>
							</div>
							
							<div style="width: 25%; display: inline-block;">
								<span><xsl:value-of select="location" /></span>
							</div>
							
							<div style="width: 25%; display: inline-block;">
								<span style="float: right;"><xsl:value-of select="date" /></span>
							</div>
						</div>
						<hr />
						
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
					</xsl:for-each>
				</div>
			</fieldset>
		</form>
	</body>
</html>

</xsl:template>
</xsl:transform>

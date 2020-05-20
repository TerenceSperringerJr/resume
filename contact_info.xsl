<?xml version="1.0" encoding="UTF-8"?>

<xsl:transform version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="5.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/resume">

<div>
	<span>E-mail: </span>
	<a>
		<xsl:attribute name="href">
			mailto:<xsl:value-of select="email" />
		</xsl:attribute>
		<xsl:value-of select="email" />
	</a>
</div>

<div><span>Phone: <xsl:value-of select="phone" /></span></div>

</xsl:template>
</xsl:transform>

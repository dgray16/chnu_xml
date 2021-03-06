<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Students:</h2>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>Group</th>
                        <th>Book</th>
                    </tr>
                    <xsl:for-each select="progress/student">
                        <xsl:sort select="name"/>
                        <tr>
                            <td> <xsl:value-of select="name"/> </td>
                            <td> <xsl:value-of select="group"/> </td>
                            <td> <xsl:value-of select="book"/> </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
$JsFile = Get-ChildItem "$PSScriptRoot\UniversalDashboard.Markdown.*.bundle.js"

$AssetId = [UniversalDashboard.Services.AssetService]::Instance.RegisterScript($JsFile)
<#
.SYNOPSIS
Markdown control for Universal Dashboard.

.DESCRIPTION
Display Markdown In Universal Dashboard.

.PARAMETER Markdown
The markdown text to render as HTML.

.PARAMETER ShowLineNumberInCodeBlock
Display line number on the left of every line in code block.

.PARAMETER CodeBlockStyle
Hashtable of valid css properties, if the property name have [ - ] in the name then it must be in ' '.
This parameter only control the style of the <pre> block in your document.
Styles here will overwrite earlier styles.

.PARAMETER RenderRawHtml
Render raw html that inside markdown file.
Be aware that setting this to false might cause security issues if the input is user-generated. Use at your own risk.

.EXAMPLE
New-UDMarkdown -Markdown '# Heading 1'

Create <h1> tag with text Heading 1.

.EXAMPLE
New-UDPage -Name Home -Icon code -Content {
    New-UDRow -Columns {
        New-UDColumn -Content {
            # Get the content of markdown file.
            $md = Get-Content -Path .\PowerShell\DemoPage.md

            
            New-UDMarkdown -Markdown $md -CodeBlockStyle @{
                'border-radius' = '6px' 
                background = '#e6e6e6' 
                padding = '16px'
            } -CodeBlockShowLineNumbers
        }
    }
}

Render the content of DemoPage.md, Add custom style to the code block and display line numbers in code block.

.NOTES
This command use react-syntax-highlighter for highlight the code block.
The default theme of the highlight code is github, and it can't be change.

#>

function New-UDMarkdown
{
    param
    (
        [Parameter()]
        [string]$Id = [guid]::NewGuid(),
        [Parameter(Mandatory)]
        [string]$Markdown,
        [parameter()]
        [switch]$ShowLineNumberInCodeBlock,
        [parameter()]
        [hashtable]$Styles,
        [parameter()]
        [switch]$RenderRawHtml
    )

    switch ($ShowLineNumberInCodeBlock)
    {
        $true
        {
            $LineNumber = $true
        }
        $false
        {
            $LineNumber = $false
        }
    }

    switch ($RenderRawHtml)
    {
        $true
        {
            $RawHtml = $true
        }
        $false
        {
            $RawHtml = $false
        }
    }

    @{
        assetId = $AssetId 
        isPlugin = $true 
        id = $Id 
        type = 'ud-markdown'

        markdown        = $Markdown.toString()
        showLineNumbers = $LineNumber
        styles          = $Styles
        escapeHtml      = $RawHtml
    }
}


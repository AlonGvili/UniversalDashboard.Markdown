---
external help file: UniversalDashboard.Markdown-help.xml
Module Name: UniversalDashboard.Markdown
online version:
schema: 2.0.0
---

# New-UDMarkdown

## SYNOPSIS
Markdown control for Universal Dashboard.

## SYNTAX

```
New-UDMarkdown [-Markdown] <String> [-ShowLineNumberInCodeBlock] [[-Styles] <Hashtable>] [-RenderRawHtml]
 [<CommonParameters>]
```

## DESCRIPTION
Display Markdown In Universal Dashboard.

## EXAMPLES

### EXAMPLE 1
```
New-UDMarkdown -Markdown '# Heading 1'
```

Create \<h1\> tag with text Heading 1.

### EXAMPLE 2
```
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
```

Render the content of DemoPage.md, Add custom style to the code block and display line numbers in code block.

## PARAMETERS

### -Markdown
The markdown text to render as HTML.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShowLineNumberInCodeBlock
Display line number on the left of every line in code block.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Styles
Hashtable of valid css properties, if the property name have [ - ] in the name then it must be in ' '.


```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RenderRawHtml
Render raw html that inside markdown file.
Be aware that setting this to false might cause security issues if the input is user-generated.
Use at your own risk.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
This command use react-syntax-highlighter for highlight the code block.
The default theme of the highlight code is github, and it can't be change.

## RELATED LINKS

![alt text](https://png.icons8.com/ios/250/bdc3c7/markdown.png "Logo Title Text 1")


# UDMarkdown

## What Is UDMarkdown ?
Its a custom component for Universal Dashboard that let you render markdown inside Universal Dashboard.

---
## Get Started...

1. clone the repo
2. cd into Source
3. Run .\Powershell\build.ps1
   it will create new folder name UniversalDashboard.Markdown
4. import UniversalDashboard.Community
5. import the compiled module from Powershell\UniversalDashboard.Markdown\UniversalDashboard.Markdown.psd1
6. Run .\PowerShell\dashboard.ps1 to start UDMarkdown demo site.
7. Have Fun!!!! 

> You Need To Install Node.js For This To Work.

---
## Great Projects

This project was build from all those great project check them out. 

[Universal Dashboard](https://github.com/ironmansoftware/universal- "Universal-Dashboard Repository")

[React-Markdown](https://github.com/rexxars/react-markdown "React Markdown Home Repository")

[React-Syntax-Highlighter](https://github.com/conorhastings/react-syntax-highlighter "React Syntax Highlighter Repository")



---
## Support For Syntex highlight In Code Block.

changing the code block syntex highlight color

Go to **.\Source\app\components\code\code-block.js**
Then change **line 4** from github to somthing else.

Add syntex highlight to more powershell command

By default only build in cmdlets will be hightlight, to add more command do the following

Go to **.\Source\node_modules\highlight.js\lib\languages\powershell.js** and add your cmdlet name to line **67**


## Examples


![alt text](https://raw.githubusercontent.com/AlonGvili/UniversalDashboard.Markdown/master/assets/example.PNG)
##### Inline Code
Using `-Styles` parameter in `New-UDMarkdown` you can style any tag.  

##### Code Block
```powershell
Get-UDDashboard | Stop-UDDashboard

$Page = New-UDPage -Name Home -Icon code -Content {
    New-UDRow -Columns {
        New-UDColumn -Content {
            # Get the content of markdown file.
            $md = Get-Content -Path .\PowerShell\DemoPage.md -Raw

            New-UDMarkdown -Markdown $md -ShowLineNumberInCodeBlock -Styles @{

                root =@{
                    border = '2px solid rgb(24, 26, 31)'
                    'background-color' = '#343a40'
                    margin = '20px 0'
                }
                img = @{
                    # width = '50%'; 
                    display = 'block'; 
                    'margin-left' = 'auto'; 
                    'margin-right' = 'auto'
                }
            }                
            
        } -LargeOffSet 3 -LargeSize 6
    }
}

$dbProps = @{
    BackgroundColor = '#24292e'
    FontColor = '#b0bec5'
    NavBarColor = '#202529'
    NavBarFontColor = '#fff'
    NavbarLinks = @(
        New-UDLink -Text 'GitHub' -Url 'https://github.com/AlonGvili/UniversalDashboard.Markdown' -Icon github_alt -FontColor '#fff'
    )
}

$db = New-UDDashboard -Title "UDMarkdown" -Pages $Page @dbProps

Start-UDDashboard -Dashboard $db -Port 10012
```

---
## Parameters

New-UDMarkdown Parameters

| Parameter        | Value           |
| ------------- |:-------------:|
| `-Markdown`      | String |
| `-ShowLineNumberInCodeBlock`      | Bool      |
| `-Styles` | HashTable      |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

## Styles Parameter Options

For styling your markdown use the following options.

`root` - this will add styles to main container

`h1` - `h6` - add styles to heading

`blockquote` - add styles to blockquote

`img` - add styles to images

`inlinecode` - add styles to inline code only

`codeBlock` - add styles to code block only

`p` - add styles to paragraph

`hr` - add styles to horizontal row

`em` - add styles to emphasis text

`strong` - add styles to bold text

`delete` - add styles to delete text

`link` - add styles to a tag

##### For styling a table use nested hashtable

`table` - add styles to table container

`thead` - add styles to table header

`tbody` - add styles to table body

`trow` - add styles to table row

`td` - add styles to table cell

##### Eample

```powershell
table = @{
    ...
    thead = @{
        ...
    }
    tbody = @{
        ...
    }
    trow = @{
        ...
    }
    td = @{
        ...
    }
}
```

##### For styling a list use nested hashtable

`list` - add styles to list container

`ol` - add styles to order list only

`ul` - add styles to unordered list only

`listitem` - add styles to a list item

##### Example

```powershell
list = @{
    ...
    ol = @{
        ...
    }
    ul = @{
        ...
    }
    listitem = @{
        ...
    }
}
```

---
## Notes
When you import this module by default the td css style from UDThme will be reset to unset , this is because UDTheme will override the Markdown style for td tag.                               

I added className for every style tag from the list above so you can use UDTheme to style the markdown doc, for example in order to style the table tag you will need to add this to your UDTheme definition
```powershell
'.ud-markdown-table' = @{
    backgroundColor = 'red'
}
```
To style the table head add this code
```powershell
'.ud-markdown-table-head' = @{
    backgroundColor = 'green'
}
```
---
## Downloads

> Get this module from PSGallery [UniversalDashboard.Markdown](https://www.powershellgallery.com/packages/UniversalDashboard.Markdown/1.2.0)

or

> Install using PowerShellGet `Install-Module -Name UniversalDashboard.Markdown`



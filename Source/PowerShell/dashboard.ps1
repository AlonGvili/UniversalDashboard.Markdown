
$Page = New-UDPage -Name Home -Icon code -Content {
    New-UDRow -Columns {
        New-UDColumn -Content {
            # Get the content of markdown file.
            $md = Get-Content -Path .\PowerShell\DemoPage.md -Raw

            # Render the markdown and styles.
            New-UDMarkdown -Markdown $md -ShowLineNumberInCodeBlock -Styles @{

                root =@{
                    border = '2px solid rgb(24, 26, 31)'
                    backgroundColor = '#343a40'
                    margin = '20px 0'
                }
                h1 = @{
                    color = '#9da5b4'; 
                    padding = '15px'; 
                    textAlign = 'center'; 
                    backgroundColor = '#24292e'; 
                    marginBottom = '0'
                    borderTop = '2px solid rgb(24, 26, 31)'
                    borderBottom = '2px solid rgb(24, 26, 31)'
                }
                h2 = @{
                    color = '#fff'; 
                    padding = '20px'
                    fontWeight = '600'
                }
                h3 = @{
                    color = '#8e24aa'; 
                    padding = '20px'
                }
                h5 = @{
                    color = '#fff'; 
                    padding = '20px'
                }
                h6 = @{
                    color = '#9da5b4'; 
                    padding = '20px'
                    fontWeight = '600'
                    textAlign = 'center'
                }
                blockquote = @{
                    color = '#9da5b4'; 
                    borderLeft = '5px solid #fff'; 
                    backgroundColor = 'rgb(32, 37, 41)'; 
                    padding = '10px'
                    margin = '0 15px 20px'
                }
                img = @{
                    display = 'block'; 
                    marginLeft = 'auto'; 
                    marginRight = 'auto'
                }
                inlinecode = @{
                    backgroundColor = 'rgb(32, 37, 41)';
                    border = '1px solid rgb(24, 26, 31)';
                    color = '#fff';
                    padding = '10px';
                }
                codeBlock = @{
                    color = '#fff'; 
                    border = '1px solid rgb(24, 26, 31)'; 
                    backgroundColor = 'rgb(32, 37, 41)'; 
                    padding = '10px'
                    margin = '20px 20px'
                    borderRadius = '3px'
                }
                p = @{
                    margin = '25px 20px'
                }
                table =  @{
                    border = '1px solid rgb(24, 26, 31)'; 
                    backgroundColor = '#24292e'; 
                    margin = 20
                    width = '70%'
                    thead = @{
                        color = '#0d474e'
                        backgroundColor = '#45b9c8'
                        padding = 20
                        fontWeight = 600
                        fontSize = 20
                        borderBottom = '1px solid rgb(24, 26, 31)'
                    }
                    tbody = @{
                        trow = @{
                            border = '1px solid rgb(24, 26, 31)'
                            td = @{
                                padding = '15px !important'
                            }
                        }
                    }
                }
                hr = @{
                    border = '5px solid #24292e'
                    margin = '0 -2px'
                }
                em = @{
                    color = '#eceff1'
                }
                strong = @{
                    color = '#fff'
                }
                delete = @{
                    color = '#fff'
                }
                link = @{
                    color = '#fff'
                    fontWeight = 600
                }
                list = @{
                    ol = @{
                        color = '#4dd0e1'
                    }
                    ul = @{
                        color = '#fff'
                        paddingLeft = '20px !important'
                    }
                    listitem = @{
                        'list-style-type' = 'disk'
                    }
                }

            }
        } -LargeOffSet 3 -LargeSize 6
    }
}

$db = New-UDDashboard -Title "UDMarkdown" -Pages $Page -BackgroundColor '#24292e' -FontColor '#b0bec5' -NavBarColor '#202529' -NavbarLinks @(
    New-UDLink -Text 'GitHub' -Url 'https://github.com/AlonGvili/UniversalDashboard.Markdown' -Icon github_alt -FontColor '#fff'
) -NavBarFontColor '#fff'

Start-UDDashboard -Dashboard $db -Port 10012
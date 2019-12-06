
# source\powershell
$BuildFolder = $PSScriptRoot
# Full Path to powershell folder
$PSFolder = Resolve-Path -Path $PSScriptRoot
# Source folder path
$SourceFolder = Split-Path -Path $PSFolder -Parent

$platyPS = Import-Module platyPS  -PassThru -ErrorAction Ignore
if ($null -eq $platyPS) {
	Install-Module platyPS -Scope CurrentUser -Force
	Import-Module platyPS -Force
} 

$powerShellGet = Import-Module PowerShellGet  -PassThru -ErrorAction Ignore
if ($powerShellGet.Version -lt ([Version]'1.6.0')) {
    Install-Module PowerShellGet -Scope CurrentUser -Force -AllowClobber
    Import-Module PowerShellGet -Force
}

Set-Location $SourceFolder

$OutputPath = "$SourceFolder\Output"
Remove-Item -Path $OutputPath -Force -ErrorAction SilentlyContinue -Recurse 
New-Item -Path $SourceFolder -Name "Output"  -ItemType Directory -Force

New-Item -Path $OutputPath -Name "UniversalDashboard.Markdown" -ItemType Directory
New-Item -Path $OutputPath\UniversalDashboard.Markdown -Name Help -ItemType Directory

Remove-Item -Path "$PSFolder\UniversalDashboard.Markdown.*.bundle.js" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "$PSFolder\UniversalDashboard.Markdown.*.bundle.js.map" -Force -ErrorAction SilentlyContinue

npm install
npm run build

Copy-Item $PSFolder\UniversalDashboard.Markdown.*.bundle.js $OutputPath\UniversalDashboard.Markdown
Copy-Item $PSFolder\UniversalDashboard.Markdown.*.bundle.js.map $OutputPath\UniversalDashboard.Markdown
Copy-Item $PSFolder\UniversalDashboard.Markdown.psm1 $OutputPath\UniversalDashboard.Markdown
Copy-Item $PSFolder\UniversalDashboard.Markdown.psd1 $OutputPath\UniversalDashboard.Markdown
# Copy-Item $PSFolder\New-UDMarkdown.md $OutputPath\UniversalDashboard.Markdown\Help

Remove-Item -Path "$PSFolder\UniversalDashboard.Markdown.*.bundle.js" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "$PSFolder\UniversalDashboard.Markdown.*.bundle.js.map" -Force -ErrorAction SilentlyContinue

# Import-Module $OutputPath\UniversalDashboard.Markdown\UniversalDashboard.Markdown.psd1
# New-MarkdownHelp -Module UniversalDashboard.Markdown -OutputFolder $OutputPath\UniversalDashboard.Markdown\Help -Force
# New-ExternalHelp -Path "$OutputPath\UniversalDashboard.Markdown\Help" -OutputPath "$OutputPath\UniversalDashboard.Markdown\Help\en-US\ UniversalDashboard.Markdown-help.xml"



# Script para adicionar rodapé e estilizar todas as páginas do PDF

$filePath = "pdf-generator.js"
$content = Get-Content $filePath -Raw

# Substituir todas as divs de página para usar a classe .page sem inline styles desnecessários
$content = $content -replace '<div style="page-break-after: always; padding: 40px 20px;">', '<div class="page">'

# Adicionar rodapés em cada fechamento de div.page (exceto a capa)
$pageNum = 1
$content = $content -replace '(?<=</div>\s*</div>\s*)\s*<!-- Página 2:', "`${createFooter($pageNum)}`n        </div>`n`n        <!-- Página 2:"

Write-Host "✅ PDF pages fixed with footer and styling!" -ForegroundColor Green
$content | Set-Content $filePath

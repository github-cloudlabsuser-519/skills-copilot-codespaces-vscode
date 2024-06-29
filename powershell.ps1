# Variables
$resourceGroupName = "MyResourceGroup"
$location = "East US"
$storageAccountName = "mystorageaccount" + (Get-Date -Format "MMddyyyyhhmmss")
$storageSkuName = "Standard_LRS" # Standard Locally Redundant Storage
$storageKind = "StorageV2" # General-purpose v2 storage account

# Create a new resource group if it doesn't already exist
$resourceGroup = Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue
if (-not $resourceGroup) {
    $resourceGroup = New-AzResourceGroup -Name $resourceGroupName -Location $location
    Write-Host "Resource group '$resourceGroupName' created in '$location'."
} else {
    Write-Host "Using existing resource group '$resourceGroupName'."
}

# Create the storage account
$storageAccount = New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                                        -Name $storageAccountName `
                                        -Location $location `
                                        -SkuName $storageSkuName `
                                        -Kind $storageKind

Write-Host "Storage account '$storageAccountName' created successfully."
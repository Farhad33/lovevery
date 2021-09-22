export function findKit(birthDate, kits) {
    let age = calculateAge(birthDate)
    let selectedKit = {}

    kits.forEach(kit => {
        if (age >= kit.minAge && age < kit.maxAge) {
            selectedKit = {kit, msg: ''}
        } else if (age >= 13 && kit.timeFrame === "Months 11-12") {
            selectedKit = {kit, msg: 'Your baby is too old'}
        } else if (age < 13 && kit.timeFrame === "Weeks 0-12") {
            selectedKit = {kit, msg: 'Your baby is too young'}
        }
    })

    return selectedKit
}

function calculateAge({year, month, day}) {
    let currentDate = new Date()
    let birthDate = new Date(`${year} ${month} ${day}`)
    let age = (((((currentDate - birthDate) / 1000) / 60) / 60) / 24) / 30
    return age
}

export function findRelatedKits(kits, selectedKit) {
    let results = {}
    let kitAfter = selectedKit.maxAge + 1
    let kitBefore = selectedKit.minAge - 1
    
    kits.forEach(kit => {
        if (kitAfter >= kit.minAge && kitAfter < kit.maxAge) {
            results.next = kit
        }
        if (kitBefore >= kit.minAge && kitBefore < kit.maxAge) {
            results.previous = kit
        }
    })
    return results
}
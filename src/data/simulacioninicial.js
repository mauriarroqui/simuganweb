let xml = ' <escenario id="temp" userId="0" name="r7xMauri" private="false" experimental="true"> '+
    ' <earlyWeaning enable="false" suministro="5"> '+
        '<earlyWeaningMob calfUmbralLw="60" enableCalf="false" calfDestiny="beef_finishing" calfDietBProtein="10" calfDietIntake="2" calfDietDigest="85" calfDietDRProtein="8" umbralBcs="4" enable="false" mobId="1"/>'+
        '<earlyWeaningMob calfUmbralLw="60" enableCalf="false" calfDestiny="beef_finishing" calfDietBProtein="10" calfDietIntake="2" calfDietDigest="85" calfDietDRProtein="8" umbralBcs="4" enable="false" mobId="2"/>'+
        '<earlyWeaningMob calfUmbralLw="60" enableCalf="false" calfDestiny="beef_finishing" calfDietBProtein="10" calfDietIntake="2" calfDietDigest="85" calfDietDRProtein="8" umbralBcs="4" enable="false" mobId="3"/>'+
    ' </earlyWeaning> '+
    ' <otherOportunityToEmptyCows enable="false"/> '+
    ' <recetas> '+
        ' <receta id="2" name="RG-MZ" years="4"> '+
            ' <years number="1" contenido="ampliar" January="9" February="9" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="9" December="9"/> '+
            ' <years number="2" contenido="ampliar" January="9" February="9" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="9" December="9"/> '+
            ' <years number="3" contenido="ampliar" January="9" February="9" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="9" December="9"/> '+
            ' <years number="4" contenido="ampliar" January="9" February="9" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="9" December="9"/> '+
        ' </receta> '+
        ' <receta id="1" name="Fest" years="4"> '+
            ' <years number="1" contenido="2" January="1" February="1" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="1" December="1"/> '+
            ' <years number="2" contenido="2" January="1" February="1" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="1" December="1"/> '+
            ' <years number="3" contenido="2" January="1" February="1" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="1" December="1"/> '+
            ' <years number="4" contenido="2" January="1" February="1" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="1" December="1"/> '+
        ' </receta> '+
        ' <receta id="4" name="FT" years="4"> '+
            ' <years number="1" contenido="4" January="1" February="1" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="1" December="1"/> '+
            ' <years number="2" contenido="4" January="1" February="1" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="1" December="1"/> '+
            ' <years number="3" contenido="4" January="1" February="1" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="1" December="1"/> '+
            ' <years number="4" contenido="4" January="1" February="1" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="1" December="1"/> '+
        ' </receta> '+
        ' <receta id="5" name="FAlfa" years="4"> '+
            ' <years number="1" contenido="5" January="1" February="1" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="1" December="1"/> '+
            ' <years number="2" contenido="5" January="1" February="1" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="1" December="1"/> '+
            ' <years number="3" contenido="5" January="1" February="1" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="1" December="1"/> '+
            ' <years number="4" contenido="5" January="1" February="1" March="1" April="1" May="1" June="1" July="1" August="1" September="1" October="1" November="1" December="1"/> '+
        ' </receta> '+
    ' </recetas> '+
    ' <cash_crops> '+
        ' <cash_crop rinde="110" name="silo de ma¿z" tipocultivo="Maiz" rot_id="9" id="1"> '+
            ' <insumos> '+
                ' <insumo repit="false" amount="2" days_after_seed="12" activity="111" type="curasemilla" id="1"/> '+
            ' </insumos> '+
            ' <adicionales fcg="0" cesiones="false" divida="false" acosecha="false" sinventa="true"> '+
                ' <ventas/> '+
                ' <cesiones/> '+
            ' </adicionales> '+
            ' <labores> '+
                ' <labor repit="false" contracted="true" days_after_seed="12" activity="50" id="1"/> '+
            ' </labores> '+
        ' </cash_crop> '+
    ' </cash_crops> '+
    ' <crop_stubbles> '+
        ' <crop_stubble id="1" rot_id="6" name="Rastrojo 1" tipocultivo="Trigo" yield="21" crop_stubbleDigest="70" crop_stubbleDRProtein="8" crop_stubbleBProtein="12" /> '+
            ' <crop_stubble id="2" rot_id="7" name="Rastrojo 2" tipocultivo="Soja" yield="20" crop_stubbleDigest="50" crop_stubbleDRProtein="7" crop_stubbleBProtein="11" /> '+
            ' <crop_stubble id="2" rot_id="8" name="Rastrojo 3" tipocultivo="Girasol" yield="22" crop_stubbleDigest="60" crop_stubbleDRProtein="9" crop_stubbleBProtein="13" /> '+
    ' </crop_stubbles> '+
    ' <pastureType> '+
        ' <pasture taza="normal" pastureDigestStem="75" pastureBProteinDead="3" pastureBProteinLeaf="22" pastureDRProteinStem="17" pastureDRProteinLeaf="20" pastureDRProteinDead="1" pastureBProteinStem="19" pastureDigestLeaf="85" pastureDigestDead="50" desc="pbase" name="Verd inv" rot_id="1" id="2"> '+
            ' <pastureAccumRateMean December="0" November="0" October="36" September="41" August="36" July="13" June="22.6" May="31" April="32" March="44" February="0" January="0"/> '+
            ' <pastureAccumRateStdDev December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <insumos/> '+
            ' <labores/> '+
            ' <pastureAnualRate> '+
                ' <year December="54" November="72" October="63" September="45" August="27" July="18" June="27" May="36" April="54" March="45" February="36" January="27" ord="1"/> '+
            ' </pastureAnualRate> '+
        ' </pasture> '+
        ' <pasture taza="normal" pastureDigestStem="69" pastureBProteinDead="3" pastureBProteinLeaf="22" pastureDRProteinStem="13" pastureDRProteinLeaf="19" pastureDRProteinDead="1" pastureBProteinStem="15" pastureDigestLeaf="72" pastureDigestDead="50" desc="past" name="Fest" rot_id="2" id="1"> '+
            ' <pastureAccumRateMean December="34" November="42" October="49" September="49" August="33" July="6" June="7" May="12" April="12" March="53" February="57" January="36"/> '+
            ' <pastureAccumRateStdDev December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <insumos/> '+
            ' <labores/> '+
            ' <pastureAnualRate> '+
                ' <year December="30" November="30" October="30" September="84" August="80" July="80" June="80" May="80" April="80" March="30" February="30" January="30" ord="1"/> '+
            ' </pastureAnualRate> '+
        ' </pasture> '+
        ' <pasture taza="normal" pastureDigestStem="70" pastureBProteinDead="3" pastureBProteinLeaf="22" pastureDRProteinStem="17" pastureDRProteinLeaf="19" pastureDRProteinDead="1" pastureBProteinStem="19" pastureDigestLeaf="72" pastureDigestDead="45" desc="past" name="FT" rot_id="4" id="4"> '+
            ' <pastureAccumRateMean December="30" November="48" October="61" September="50" August="26" July="16" June="12" May="22" April="36" March="63" February="56" January="36"/> '+
            ' <pastureAccumRateStdDev December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <insumos/> '+
            ' <labores/> '+
            ' <pastureAnualRate> '+
                ' <year December="30" November="30" October="30" September="84" August="80" July="80" June="80" May="80" April="80" March="30" February="30" January="30" ord="1"/> '+
            ' </pastureAnualRate> '+
        ' </pasture> '+
        ' <pasture taza="normal" pastureDigestStem="62" pastureBProteinDead="3" pastureBProteinLeaf="15" pastureDRProteinStem="12" pastureDRProteinLeaf="13" pastureDRProteinDead="1" pastureBProteinStem="14" pastureDigestLeaf="64" pastureDigestDead="45" desc="past" name="FAlfa" rot_id="5" id="5"> '+
            ' <pastureAccumRateMean December="32" November="56" October="56" September="46" August="23" July="9" June="17" May="28" April="23" March="43" February="58" January="36"/> '+
            ' <pastureAccumRateStdDev December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <insumos/> '+
            ' <labores/> '+
            ' <pastureAnualRate> '+
                ' <year December="30" November="30" October="30" September="84" August="80" July="80" June="80" May="80" April="80" March="30" February="30" January="30" ord="1"/> '+
            ' </pastureAnualRate> '+
        ' </pasture> '+
    ' </pastureType> '+
    ' <stockPilledType> '+
    ' <stockPilled stockPilledBProtein="10" stockPilledDRProtein="8" stockPilledDigest="56" enableDay="1" enableMonth="3" yield="75" name="Sorgo1" rot_id="12" id="2"> '+
        ' <insumos> '+
        ' <insumo repit="false" amount="1" days_after_seed="60" activity="110" type="semilla" id="2"/> '+
        ' </insumos> '+
        ' <labores/> '+
        ' </stockPilled> '+
        ' <stockPilled stockPilledBProtein="10" stockPilledDRProtein="8" stockPilledDigest="57" enableDay="1" enableMonth="3" yield="76" name="Sorgo2" rot_id="11" id="1"> '+
        ' <insumos> '+
        ' <insumo repit="false" amount="1" days_after_seed="60" activity="110" type="semilla" id="2"/> '+
        ' </insumos> '+
        ' <labores/> '+
        ' </stockPilled> '+
     ' </stockPilledType> '+
    ' <paddocks> '+
        ' <paddock id="1" name="Verd1" paddockLeafMass="2000" paddockSteamMass="400" paddockDeadMass="100" paddockUsage="grazing" paddockHA="5" paddockPastureType="1" paddockMinGrowthDays="60" paddockMinGrazingMass="1500" receta="2" anioinicio="1"/> '+
        ' <paddock anioinicio="1" receta="2" paddockMinGrazingMass="1500" paddockMinGrowthDays="60" paddockPastureType="2" paddockHA="5" paddockUsage="grazing" paddockDeadMass="100" paddockSteamMass="400" paddockLeafMass="2000" name="Verd2" id="2"/> '+
        ' <paddock anioinicio="1" receta="2" paddockMinGrazingMass="1500" paddockMinGrowthDays="60" paddockPastureType="2" paddockHA="5" paddockUsage="grazing" paddockDeadMass="100" paddockSteamMass="400" paddockLeafMass="2000" name="Verd3" id="3"/> '+
        ' <paddock anioinicio="1" receta="2" paddockMinGrazingMass="1500" paddockMinGrowthDays="30" paddockPastureType="2" paddockHA="5" paddockUsage="grazing" paddockDeadMass="100" paddockSteamMass="400" paddockLeafMass="2000" name="Verd4" id="4"/> '+
        ' <paddock anioinicio="1" receta="2" paddockMinGrazingMass="1500" paddockMinGrowthDays="30" paddockPastureType="2" paddockHA="4" paddockUsage="grazing" paddockDeadMass="100" paddockSteamMass="400" paddockLeafMass="2000" name="Verd5" id="5"/> '+
        ' <paddock anioinicio="1" receta="1" paddockMinGrazingMass="1500" paddockMinGrowthDays="30" paddockPastureType="2" paddockHA="5" paddockUsage="grazing" paddockDeadMass="100" paddockSteamMass="400" paddockLeafMass="2000" name="Fest1" id="6"/> '+
        ' <paddock anioinicio="1" receta="1" paddockMinGrazingMass="1500" paddockMinGrowthDays="30" paddockPastureType="2" paddockHA="5" paddockUsage="grazing" paddockDeadMass="100" paddockSteamMass="400" paddockLeafMass="2000" name="Fest2" id="7"/> '+
        ' <paddock anioinicio="1" receta="1" paddockMinGrazingMass="1500" paddockMinGrowthDays="30" paddockPastureType="2" paddockHA="5" paddockUsage="grazing" paddockDeadMass="100" paddockSteamMass="400" paddockLeafMass="2000" name="Fest3" id="8"/> '+
        ' <paddock anioinicio="1" receta="4" paddockMinGrazingMass="1500" paddockMinGrowthDays="30" paddockPastureType="2" paddockHA="5" paddockUsage="grazing" paddockDeadMass="100" paddockSteamMass="400" paddockLeafMass="2000" name="FT1" id="9"/> '+
        ' <paddock anioinicio="1" receta="4" paddockMinGrazingMass="1500" paddockMinGrowthDays="30" paddockPastureType="2" paddockHA="5" paddockUsage="grazing" paddockDeadMass="100" paddockSteamMass="400" paddockLeafMass="2000" name="FT2" id="10"/> '+
        ' <paddock anioinicio="1" receta="4" paddockMinGrazingMass="1500" paddockMinGrowthDays="30" paddockPastureType="2" paddockHA="6" paddockUsage="grazing" paddockDeadMass="100" paddockSteamMass="400" paddockLeafMass="2000" name="FT3" id="11"/> '+
        ' <paddock anioinicio="1" receta="5" paddockMinGrazingMass="1500" paddockMinGrowthDays="30" paddockPastureType="2" paddockHA="5" paddockUsage="grazing" paddockDeadMass="100" paddockSteamMass="400" paddockLeafMass="2000" name="FAlfa1" id="12"/> '+
        ' <paddock anioinicio="1" receta="5" paddockMinGrazingMass="1500" paddockMinGrowthDays="30" paddockPastureType="2" paddockHA="5" paddockUsage="grazing" paddockDeadMass="100" paddockSteamMass="400" paddockLeafMass="2000" name="FAlfa2" id="13"/> '+
        ' <paddock anioinicio="1" receta="5" paddockMinGrazingMass="1500" paddockMinGrowthDays="30" paddockPastureType="2" paddockHA="5" paddockUsage="grazing" paddockDeadMass="100" paddockSteamMass="400" paddockLeafMass="2000" name="FAlfa3" id="14"/> '+
    ' </paddocks> '+
    ' <simulation startingYear="2012" startingMonth="3" startingDay="12" finishingYear="2012" finishingMonth="6" finishingDay="26" randomSeed="5" useRandomSeed="true" economico="true" impositivo="false"/> '+
    ' <globalMob useGlobalPastureAllowances="false" useGlobalGrainAllowances="false" useGlobalSilageAllowances="false" mobAllowanceAdjustmentByInterval="false" mobMovementInterval="1" minPastureAllowance="3" maxPastureAllowance="16" randomAnimalDataGeneration="true" comercializacionVentaCria="3" comercializacionCompraCria="3"> '+
        ' <globalPastureAllow January="25" February="25" March="25" April="25" May="25" June="25" July="25" August="25" September="25" October="25" November="25" December="25"/> '+
        ' <globalSilageAllow January="0.0" February="0.0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0.0" December="0.0"/> '+
        ' <globalGrainAllow January="0.0" February="0.0" March="0.0" April="0.0" May="0.0" June="0.0" July="0.0" August="0.0" September="0.0" October="0.0" November="0.0" December="0.0"/> '+
    ' </globalMob> '+
    ' <mobs> '+
        ' <mob enableCrop_stubble="true" crop_stubblePriority="3" stockPilledPriority="3" enableStockPilled="false" endday="30" endmonth="11" startday="30" startmonth="08" service="15" minInServiceWeight="260" bullUtilLife="7" bullPercent="10" storeHeiferCalf="0" storeSteerCalf="0" pregnantRepositionUsed="false" cowWithoutCalf="false" repositionPercent="0" name="PP" mobUse="beef_finishing" id="1"> '+
            ' <pastureAllow December="6" November="6" October="6" September="6" August="6" July="6" June="6" May="6" April="6" March="6" February="6" January="6"/> '+
            ' <silageAllow December="0" November="0" October="0" September="00" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <stockPilledAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
            ' <submobs> '+
                ' <submob calfBCS="5" calfAge="60" maxDayAfterCalving="90" meanDayAfterCalving="70" minDayAfterCalving="40" calfSwMax="140" calfSwMean="90" calfSwMin="40" calfPresence="true" submobPregnancyDaysMin="80" submobPregnancyDaysMean="160" submobPregnancyDaysMax="240" frame="5" startPregnant="true" isCalved="true" utillife="5" weaning="3" weightAtBirth="40" startCountAnimals="9" submobIonospheres="false" submobBCS="5" submobBreed="0" submobSwMax="220" submobSwMean="215" submobSwMin="210" submobName="Machos" submobSex="castrate" submobAge="180" id="2"> '+
                    ' <weanerSubMob startWithWeanerSubMob="false"> '+
                        ' <vaquillonas1ano bcs="5" swMin="220" swMean="250" swMax="280" age="270" amount="63"/> '+
                        ' <vaquillonas2ano bcs="5" swMin="280" swMean="300" swMax="320" age="580" amount="63"/> '+
                    ' </weanerSubMob> '+
                    ' <cutSubMob calfAge="60" calfBCS="5" calfSwMin="28" calfSwMean="120" calfSwMax="220" calfPresence="true" pregnancyDaysMax="254" pregnancyDaysMean="234" pregnancyDaysMin="164" startPregnant="true" bcs="5" swMin="460" swMean="480" swMax="500" amount="63" startWithCutSubMob="false"/> '+
                ' </submob> '+
            ' </submobs> '+
            ' <weaning_mob enableCrop_stubble="true" crop_stubblePriority="3" stockPilledPriority="3" enableStockPilled="true"> '+
                ' <pastureAllow December="5" November="5" October="5" September="5" August="5" July="5" June="5" May="5" April="5" March="5" February="5" January="5"/> '+
                ' <silageAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <stockPilledAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
                ' <paddockAssigned> '+
                    ' <paddock id="1"/> '+
                ' </paddockAssigned> '+
            ' </weaning_mob> '+
            ' <paddockAssigned> '+
                ' <paddock id="2"/> '+
                ' <paddock id="1"/> '+
                ' <paddock id="3"/> '+
                ' <paddock id="4"/> '+
                ' <paddock id="5"/> '+
                ' <paddock id="6"/> '+
                ' <paddock id="7"/> '+
                ' <paddock id="8"/> '+
                ' <paddock id="9"/> '+
                ' <paddock id="10"/> '+
                ' <paddock id="11"/> '+
                ' <paddock id="12"/> '+
                ' <paddock id="13"/> '+
                ' <paddock id="14"/> '+
            ' </paddockAssigned> '+
        ' </mob> '+
        ' <mob enableCrop_stubble="true" crop_stubblePriority="3" stockPilledPriority="3" enableStockPilled="true" endday="30" endmonth="11" startday="30" startmonth="08" service="15" minInServiceWeight="260" bullUtilLife="7" bullPercent="10" storeHeiferCalf="0" storeSteerCalf="0" pregnantRepositionUsed="false" cowWithoutCalf="false" repositionPercent="0" name="PV" mobUse="beef_finishing" id="2"> '+
            ' <pastureAllow December="5" November="5" October="5" September="5" August="5" July="5" June="5" May="5" April="5" March="5" February="5" January="5"/> '+
            ' <silageAllow December="0" November="0" October="0" September="1" August="1" July="1" June="1" May="1" April="0" March="0" February="0.5" January="0.5"/> '+
            ' <grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <stockPilledAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
            ' <submobs> '+
                ' <submob calfBCS="5" calfAge="60" maxDayAfterCalving="90" meanDayAfterCalving="70" minDayAfterCalving="40" calfSwMax="140" calfSwMean="90" calfSwMin="40" calfPresence="true" submobPregnancyDaysMin="80" submobPregnancyDaysMean="160" submobPregnancyDaysMax="240" frame="5" startPregnant="true" isCalved="true" utillife="8" weaning="3" weightAtBirth="40" startCountAnimals="86" submobIonospheres="false" submobBCS="5" submobBreed="0" submobSwMax="170" submobSwMean="165" submobSwMin="160" submobName="Hembras" submobSex="female" submobAge="180" id="1"> '+
                    ' <weanerSubMob startWithWeanerSubMob="false"> '+
                        ' <vaquillonas1ano bcs="5" swMin="220" swMean="250" swMax="280" age="270" amount="63"/> '+
                        ' <vaquillonas2ano bcs="5" swMin="280" swMean="300" swMax="320" age="580" amount="63"/> '+
                    ' </weanerSubMob> '+
                    ' <cutSubMob calfAge="60" calfBCS="5" calfSwMin="28" calfSwMean="120" calfSwMax="220" calfPresence="true" pregnancyDaysMax="254" pregnancyDaysMean="234" pregnancyDaysMin="164" startPregnant="true" bcs="5" swMin="460" swMean="480" swMax="500" amount="63" startWithCutSubMob="false"/> '+
                ' </submob> '+
                ' <submob calfBCS="5" calfAge="60" maxDayAfterCalving="90" meanDayAfterCalving="70" minDayAfterCalving="40" calfSwMax="140" calfSwMean="90" calfSwMin="40" calfPresence="true" submobPregnancyDaysMin="80" submobPregnancyDaysMean="160" submobPregnancyDaysMax="240" frame="5" startPregnant="true" isCalved="true" utillife="5" weaning="3" weightAtBirth="40" startCountAnimals="26" submobIonospheres="false" submobBCS="5" submobBreed="0" submobSwMax="170" submobSwMean="165" submobSwMin="160" submobName="Machos" submobSex="castrate" submobAge="180" id="2"> '+
                    ' <weanerSubMob startWithWeanerSubMob="false"> '+
                        ' <vaquillonas1ano bcs="5" swMin="220" swMean="250" swMax="280" age="270" amount="63"/> '+
                        ' <vaquillonas2ano bcs="5" swMin="280" swMean="300" swMax="320" age="580" amount="63"/> '+
                    ' </weanerSubMob> '+
                    ' <cutSubMob calfAge="60" calfBCS="5" calfSwMin="28" calfSwMean="120" calfSwMax="220" calfPresence="true" pregnancyDaysMax="254" pregnancyDaysMean="234" pregnancyDaysMin="164" startPregnant="true" bcs="5" swMin="460" swMean="480" swMax="500" amount="63" startWithCutSubMob="false"/> '+
                ' </submob> '+
            ' </submobs> '+
            ' <weaning_mob enableCrop_stubble="false" crop_stubblePriority="3" stockPilledPriority="3" enableStockPilled="false"> '+
                ' <pastureAllow December="5" November="5" October="5" September="5" August="5" July="5" June="5" May="5" April="5" March="5" February="5" January="5"/> '+
                ' <silageAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <stockPilledAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
                ' <paddockAssigned> '+
                    ' <paddock id="1"/> '+
                ' </paddockAssigned> '+
            ' </weaning_mob> '+
            ' <paddockAssigned> '+
                ' <paddock id="1"/> '+
                ' <paddock id="2"/> '+
                ' <paddock id="3"/> '+
                ' <paddock id="4"/> '+
                ' <paddock id="5"/> '+
                ' <paddock id="6"/> '+
                ' <paddock id="7"/> '+
                ' <paddock id="8"/> '+
                ' <paddock id="9"/> '+
                ' <paddock id="10"/> '+
                ' <paddock id="11"/> '+
                ' <paddock id="12"/> '+
                ' <paddock id="13"/> '+
                ' <paddock id="14"/> '+
            ' </paddockAssigned> '+
        ' </mob> '+
        ' <mob enableCrop_stubble="false" crop_stubblePriority="3" stockPilledPriority="3" enableStockPilled="true" endday="30" endmonth="11" startday="30" startmonth="08" service="15" minInServiceWeight="260" bullUtilLife="7" bullPercent="10" storeHeiferCalf="0" storeSteerCalf="0" pregnantRepositionUsed="false" cowWithoutCalf="false" repositionPercent="0" name="RV" mobUse="beef_finishing" id="3"> '+
            ' <pastureAllow December="5" November="5" October="5" September="0" August="0" July="0" June="5" May="5" April="5" March="0" February="0" January="0"/> '+
            ' <silageAllow December="0" November="0" October="0" September="2.5" August="2.5" July="02.5" June="1" May="0.5" April="0.5" March="2.5" February="2.5" January="2.5"/> '+
            ' <grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <stockPilledAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
            ' <submobs> '+
                ' <submob calfBCS="5" calfAge="60" maxDayAfterCalving="90" meanDayAfterCalving="70" minDayAfterCalving="40" calfSwMax="140" calfSwMean="90" calfSwMin="40" calfPresence="true" submobPregnancyDaysMin="80" submobPregnancyDaysMean="160" submobPregnancyDaysMax="240" frame="5" startPregnant="true" isCalved="true" utillife="8" weaning="3" weightAtBirth="40" startCountAnimals="138" submobIonospheres="false" submobBCS="5" submobBreed="0" submobSwMax="220" submobSwMean="215" submobSwMin="210" submobName="Machos" submobSex="castrate" submobAge="180" id="1"> '+
                    ' <weanerSubMob startWithWeanerSubMob="false"> '+
                        ' <vaquillonas1ano bcs="5" swMin="220" swMean="250" swMax="280" age="270" amount="63"/> '+
                        ' <vaquillonas2ano bcs="5" swMin="280" swMean="300" swMax="320" age="580" amount="63"/> '+
                    ' </weanerSubMob> '+
                    ' <cutSubMob calfAge="60" calfBCS="5" calfSwMin="28" calfSwMean="120" calfSwMax="220" calfPresence="true" pregnancyDaysMax="254" pregnancyDaysMean="234" pregnancyDaysMin="164" startPregnant="true" bcs="5" swMin="460" swMean="480" swMax="500" amount="63" startWithCutSubMob="false"/> '+
                ' </submob> '+
                ' <submob calfBCS="5" calfAge="60" maxDayAfterCalving="90" meanDayAfterCalving="70" minDayAfterCalving="40" calfSwMax="140" calfSwMean="90" calfSwMin="40" calfPresence="true" submobPregnancyDaysMin="80" submobPregnancyDaysMean="160" submobPregnancyDaysMax="240" frame="5" startPregnant="true" isCalved="true" utillife="5" weaning="3" weightAtBirth="40" startCountAnimals="29" submobIonospheres="false" submobBCS="5" submobBreed="0" submobSwMax="220" submobSwMean="215" submobSwMin="210" submobName="Hembras" submobSex="female" submobAge="180" id="2"> '+
                    ' <weanerSubMob startWithWeanerSubMob="false"> '+
                        ' <vaquillonas1ano bcs="5" swMin="220" swMean="250" swMax="280" age="270" amount="63"/> '+
                        ' <vaquillonas2ano bcs="5" swMin="280" swMean="300" swMax="320" age="580" amount="63"/> '+
                    ' </weanerSubMob> '+
                    ' <cutSubMob calfAge="60" calfBCS="5" calfSwMin="28" calfSwMean="120" calfSwMax="220" calfPresence="true" pregnancyDaysMax="254" pregnancyDaysMean="234" pregnancyDaysMin="164" startPregnant="true" bcs="5" swMin="460" swMean="480" swMax="500" amount="63" startWithCutSubMob="false"/> '+
                ' </submob> '+
            ' </submobs> '+
            ' <weaning_mob enableCrop_stubble="false" crop_stubblePriority="3" stockPilledPriority="3" enableStockPilled="false"> '+
                ' <pastureAllow December="5" November="5" October="5" September="5" August="5" July="5" June="5" May="5" April="5" March="5" February="5" January="5"/> '+
                ' <silageAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <stockPilledAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
                ' <paddockAssigned> '+
                    ' <paddock id="1"/> '+
                ' </paddockAssigned> '+
            ' </weaning_mob> '+
            ' <paddockAssigned> '+
                ' <paddock id="1"/> '+
                ' <paddock id="2"/> '+
                ' <paddock id="3"/> '+
                ' <paddock id="4"/> '+
                ' <paddock id="5"/> '+
                ' <paddock id="6"/> '+
                ' <paddock id="7"/> '+
                ' <paddock id="8"/> '+
                ' <paddock id="9"/> '+
                ' <paddock id="10"/> '+
                ' <paddock id="11"/> '+
                ' <paddock id="12"/> '+
                ' <paddock id="13"/> '+
                ' <paddock id="14"/> '+
            ' </paddockAssigned> '+
        ' </mob> '+
        ' <mob enableCrop_stubble="false" crop_stubblePriority="3" stockPilledPriority="3" enableStockPilled="false" endday="30" endmonth="11" startday="30" startmonth="08" service="15" minInServiceWeight="260" bullUtilLife="7" bullPercent="10" storeHeiferCalf="0" storeSteerCalf="0" pregnantRepositionUsed="false" cowWithoutCalf="false" repositionPercent="0" name="PC2" mobUse="beef_finishing" id="4"> '+
            ' <pastureAllow December="5" November="5" October="5" September="5" August="5" July="5" June="5" May="5" April="5" March="5" February="5" January="5"/> '+
            ' <silageAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <stockPilledAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
            ' <submobs> '+
                ' <submob calfBCS="5" calfAge="60" maxDayAfterCalving="90" meanDayAfterCalving="70" minDayAfterCalving="40" calfSwMax="140" calfSwMean="90" calfSwMin="40" calfPresence="true" submobPregnancyDaysMin="80" submobPregnancyDaysMean="160" submobPregnancyDaysMax="240" frame="5" startPregnant="true" isCalved="true" utillife="8" weaning="3" weightAtBirth="40" startCountAnimals="10" submobIonospheres="false" submobBCS="5" submobBreed="0" submobSwMax="220" submobSwMean="215" submobSwMin="210" submobName="Machos" submobSex="castrate" submobAge="180" id="1"> '+
                    ' <weanerSubMob startWithWeanerSubMob="false"> '+
                        ' <vaquillonas1ano bcs="5" swMin="220" swMean="250" swMax="280" age="270" amount="63"/> '+
                        ' <vaquillonas2ano bcs="5" swMin="280" swMean="300" swMax="320" age="580" amount="63"/> '+
                    ' </weanerSubMob> '+
                    ' <cutSubMob calfAge="60" calfBCS="5" calfSwMin="28" calfSwMean="120" calfSwMax="220" calfPresence="true" pregnancyDaysMax="254" pregnancyDaysMean="234" pregnancyDaysMin="164" startPregnant="true" bcs="5" swMin="460" swMean="480" swMax="500" amount="63" startWithCutSubMob="false"/> '+
                ' </submob> '+
            ' </submobs> '+
            ' <weaning_mob enableCrop_stubble="false" crop_stubblePriority="3" stockPilledPriority="3" enableStockPilled="false"> '+
                ' <pastureAllow December="5" November="5" October="5" September="5" August="5" July="5" June="5" May="5" April="5" March="5" February="5" January="5"/> '+
                ' <silageAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <stockPilledAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
                ' <paddockAssigned> '+
                    ' <paddock id="1"/> '+
                ' </paddockAssigned> '+
            ' </weaning_mob> '+
            ' <paddockAssigned> '+
                ' <paddock id="1"/> '+
                ' <paddock id="2"/> '+
                ' <paddock id="3"/> '+
                ' <paddock id="4"/> '+
                ' <paddock id="5"/> '+
                ' <paddock id="6"/> '+
                ' <paddock id="7"/> '+
                ' <paddock id="8"/> '+
                ' <paddock id="9"/> '+
                ' <paddock id="10"/> '+
                ' <paddock id="11"/> '+
                ' <paddock id="12"/> '+
                ' <paddock id="13"/> '+
                ' <paddock id="14"/> '+
            ' </paddockAssigned> '+
        ' </mob> '+
        ' <mob enableCrop_stubble="false" crop_stubblePriority="3" stockPilledPriority="3" enableStockPilled="false" endday="30" endmonth="11" startday="30" startmonth="08" service="15" minInServiceWeight="260" bullUtilLife="7" bullPercent="10" storeHeiferCalf="0" storeSteerCalf="0" pregnantRepositionUsed="false" cowWithoutCalf="false" repositionPercent="0" name="PC3" mobUse="beef_finishing" id="5"> '+
            ' <pastureAllow December="5" November="5" October="5" September="5" August="5" July="5" June="5" May="5" April="5" March="5" February="5" January="5"/> '+
            ' <silageAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <stockPilledAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
            ' <submobs> '+
                ' <submob calfBCS="5" calfAge="60" maxDayAfterCalving="90" meanDayAfterCalving="70" minDayAfterCalving="40" calfSwMax="140" calfSwMean="90" calfSwMin="40" calfPresence="true" submobPregnancyDaysMin="80" submobPregnancyDaysMean="160" submobPregnancyDaysMax="240" frame="5" startPregnant="true" isCalved="true" utillife="8" weaning="3" weightAtBirth="40" startCountAnimals="10" submobIonospheres="false" submobBCS="5" submobBreed="0" submobSwMax="220" submobSwMean="215" submobSwMin="210" submobName="Machos" submobSex="castrate" submobAge="180" id="1"> '+
                    ' <weanerSubMob startWithWeanerSubMob="false"> '+
                        ' <vaquillonas1ano bcs="5" swMin="220" swMean="250" swMax="280" age="270" amount="63"/> '+
                        ' <vaquillonas2ano bcs="5" swMin="280" swMean="300" swMax="320" age="580" amount="63"/> '+
                    ' </weanerSubMob> '+
                    ' <cutSubMob calfAge="60" calfBCS="5" calfSwMin="28" calfSwMean="120" calfSwMax="220" calfPresence="true" pregnancyDaysMax="254" pregnancyDaysMean="234" pregnancyDaysMin="164" startPregnant="true" bcs="5" swMin="460" swMean="480" swMax="500" amount="63" startWithCutSubMob="false"/> '+
                ' </submob> '+
            ' </submobs> '+
            ' <weaning_mob enableCrop_stubble="false" crop_stubblePriority="3" stockPilledPriority="3" enableStockPilled="false"> '+
                ' <pastureAllow December="5" November="5" October="5" September="5" August="5" July="5" June="5" May="5" April="5" March="5" February="5" January="5"/> '+
                ' <silageAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <stockPilledAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
                ' <paddockAssigned> '+
                    ' <paddock id="1"/> '+
                ' </paddockAssigned> '+
            ' </weaning_mob> '+
            ' <paddockAssigned> '+
                ' <paddock id="1"/> '+
                ' <paddock id="2"/> '+
                ' <paddock id="3"/> '+
                ' <paddock id="4"/> '+
                ' <paddock id="5"/> '+
                ' <paddock id="6"/> '+
                ' <paddock id="7"/> '+
                ' <paddock id="8"/> '+
                ' <paddock id="9"/> '+
                ' <paddock id="10"/> '+
                ' <paddock id="11"/> '+
                ' <paddock id="12"/> '+
                ' <paddock id="13"/> '+
                ' <paddock id="14"/> '+
            ' </paddockAssigned> '+
        ' </mob> '+
        ' <mob enableCrop_stubble="false" crop_stubblePriority="3" stockPilledPriority="3" enableStockPilled="false" endday="30" endmonth="11" startday="30" startmonth="08" service="15" minInServiceWeight="260" bullUtilLife="7" bullPercent="10" storeHeiferCalf="0" storeSteerCalf="0" pregnantRepositionUsed="false" cowWithoutCalf="false" repositionPercent="1" name="RC" mobUse="beef_finishing" id="6"> '+
            ' <pastureAllow December="5" November="5" October="5" September="5" August="5" July="5" June="5" May="5" April="5" March="5" February="5" January="5"/> '+
            ' <silageAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <stockPilledAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
            ' <crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
            ' <submobs> '+
                ' <submob calfBCS="5" calfAge="60" maxDayAfterCalving="90" meanDayAfterCalving="70" minDayAfterCalving="40" calfSwMax="140" calfSwMean="90" calfSwMin="40" calfPresence="true" submobPregnancyDaysMin="80" submobPregnancyDaysMean="160" submobPregnancyDaysMax="240" frame="5" startPregnant="true" isCalved="true" utillife="8" weaning="3" weightAtBirth="40" startCountAnimals="10" submobIonospheres="false" submobBCS="5" submobBreed="0" submobSwMax="220" submobSwMean="215" submobSwMin="210" submobName="Machos" submobSex="castrate" submobAge="180" id="1"> '+
                    ' <weanerSubMob startWithWeanerSubMob="false"> '+
                        ' <vaquillonas1ano bcs="5" swMin="220" swMean="250" swMax="280" age="270" amount="63"/> '+
                        ' <vaquillonas2ano bcs="5" swMin="280" swMean="300" swMax="320" age="580" amount="63"/> '+
                    ' </weanerSubMob> '+
                    ' <cutSubMob calfAge="60" calfBCS="5" calfSwMin="28" calfSwMean="120" calfSwMax="220" calfPresence="true" pregnancyDaysMax="254" pregnancyDaysMean="234" pregnancyDaysMin="164" startPregnant="true" bcs="5" swMin="460" swMean="480" swMax="500" amount="63" startWithCutSubMob="false"/> '+
                ' </submob> '+
            ' </submobs> '+
            ' <weaning_mob enableCrop_stubble="true" crop_stubblePriority="3" stockPilledPriority="3" enableStockPilled="false"> '+
                ' <pastureAllow December="5" November="5" October="5" September="5" August="5" July="5" June="5" May="5" April="5" March="5" February="5" January="5"/> '+
                ' <silageAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <stockPilledAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
                ' <crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
                ' <paddockAssigned> '+
                    ' <paddock id="1"/> '+
                ' </paddockAssigned> '+
            ' </weaning_mob> '+
            ' <paddockAssigned> '+
                ' <paddock id="1"/> '+
                ' <paddock id="2"/> '+
                ' <paddock id="3"/> '+
                ' <paddock id="4"/> '+
                ' <paddock id="5"/> '+
                ' <paddock id="6"/> '+
                ' <paddock id="7"/> '+
                ' <paddock id="8"/> '+
                ' <paddock id="9"/> '+
                ' <paddock id="10"/> '+
                ' <paddock id="11"/> '+
                ' <paddock id="12"/> '+
                ' <paddock id="13"/> '+
                ' <paddock id="14"/> '+
            ' </paddockAssigned> '+
        ' </mob> '+
    ' </mobs> '+
    ' <feeding grainDRProtein="6" grainDigest="90" grainInitial="0" grainBProtein="9.5" silageDRProtein="5" silageDigest="63" silageInitial="100000" silageBProtein="7"/> '+
    ' <globalPasture randomPastureGeneration="false" minLeafMassCeil="2499" maxLeafMassCeil="4001" seasonalPastureQtyVariationEnabled="false" seasonalPastureQtyLeafScaleFactor="0" seasonalPastureQtyStemScaleFactor="0" seasonalPastureQtyDeadScaleFactor="0" stemReproductiveQtyRegulationEnabled="false" stemNonReproductiveQtyRegulationEnabled="false" stemReproductiveQtyRegulationA="1" stemReproductiveQtyRegulationB="1" stemNonReproductiveQtyRegulationA="1" stemNonReproductiveQtyRegulationB="1" stemMassQtyRegulationLimit="100" growthMethod="taza"/> '+
    ' <sellRule lwValueFeme="385" startmonth="0" startday="1" endmonth="0" endday="1" lwValue="440" bcsValue="1" type="lw" enable="true" comercializacion="3"/> '+
    ' <makeSilage startmonth="8" startday="20" endmonth="0" endday="20" triggerMass="3000" leftoverMass="1000" pastureDigestibility="55" pastureDRProtein="12" enable="false" pastureBProtein="16"/> '+
    ' <controlPastureCover period1StartingYear="2018" period1StartingMonth="8" period1StartingDay="1" period2StartingYear="2018" period2StartingMonth="2" period2StartingDay="30" enable="false" repeatYears="true"> '+
        ' <pastureAllowAdjList> '+
            ' <pastureAllowAdjP1Range1 min="0" max="5.0" adjustmentPos="0" adjustmentNeg="0"/> '+
            ' <pastureAllowAdjP1Range2 min="5.1" max="10.0" adjustmentPos="0.05" adjustmentNeg="0.05"/> '+
            ' <pastureAllowAdjP1Range3 min="10.1" max="15.0" adjustmentPos="0.11" adjustmentNeg="0.11"/> '+
            ' <pastureAllowAdjP1Range4 min="15.1" max="25.0" adjustmentPos="0.16" adjustmentNeg="0.16"/> '+
            ' <pastureAllowAdjP1Range5 min="25.1" max="inf" adjustmentPos="0.21" adjustmentNeg="0.21"/> '+
            ' <pastureAllowAdjP2Range1 min="0" max="5.0" adjustmentPos="0" adjustmentNeg="0"/> '+
            ' <pastureAllowAdjP2Range2 min="5.1" max="10.0" adjustmentPos="0.12" adjustmentNeg="0.12"/> '+
            ' <pastureAllowAdjP2Range3 min="10.1" max="15.0" adjustmentPos="0.22" adjustmentNeg="0.22"/> '+
            ' <pastureAllowAdjP2Range4 min="15.1" max="25.0" adjustmentPos="0.32" adjustmentNeg="0.32"/> '+
            ' <pastureAllowAdjP2Range5 min="25.1" max="inf" adjustmentPos="0.42" adjustmentNeg="0.42"/> '+
        ' </pastureAllowAdjList> '+
        ' <targetPastureCover January="2200" February="2200" March="2000" April="2000" May="2000" June="1800" July="1800" August="1800" September="2000" October="2200" November="2300" December="2300"/> '+
    ' </controlPastureCover> '+
    ' <buyRule enable="false" repeatYears="false" comercializacion="6"> '+
        ' <mobSubMob buyCountAnimals="9" subMobId="2" mobId="1" age="180" swmax="220" swmean="215" swmin="210" bcs="5" startday="11" startmonth="3"/> '+
        ' <mobSubMob buyCountAnimals="26" subMobId="1" mobId="2" age="180" swmax="170" swmean="165" swmin="160" bcs="5" startday="11" startmonth="3"/> '+
        ' <mobSubMob buyCountAnimals="86" subMobId="2" mobId="2" age="180" swmax="170" swmean="165" swmin="160" bcs="5" startday="11" startmonth="3"/> '+
        ' <mobSubMob buyCountAnimals="138" subMobId="1" mobId="3" age="180" swmax="220" swmean="215" swmin="210" bcs="5" startday="11" startmonth="3"/> '+
        ' <mobSubMob buyCountAnimals="29" subMobId="2" mobId="3" age="180" swmax="220" swmean="215" swmin="210" bcs="5" startday="11" startmonth="3"/> '+
        ' <mobSubMob buyCountAnimals="0" subMobId="1" mobId="4" age="60" swmax="170" swmean="160" swmin="150" bcs="5" startday="01" startmonth="01"/> '+
        ' <mobSubMob buyCountAnimals="0" subMobId="1" mobId="5" age="60" swmax="170" swmean="160" swmin="150" bcs="5" startday="01" startmonth="01"/> '+
        ' <mobSubMob buyCountAnimals="0" subMobId="1" mobId="6" age="60" swmax="170" swmean="160" swmin="150" bcs="5" startday="01" startmonth="01"/> '+
    ' </buyRule> '+
    ' <suplementation startmonth="5" startday="1" endmonth="4" endday="31" adjustmentDays="1" adjustAllowanceGradually="false" checkIntervalDays="21" enable="false"> '+
        ' <submobAvgWeithList> '+
            ' <submobAvgWeith subMobId="2" mobId="1" December="300" November="300" October="300" September="300" August="300" July="300" June="300" May="300" April="300" March="300" February="300" January="300"/> '+
            ' <submobAvgWeith subMobId="1" mobId="2" December="300" November="300" October="300" September="300" August="300" July="300" June="300" May="300" April="300" March="300" February="300" January="300"/> '+
            ' <submobAvgWeith subMobId="2" mobId="2" December="300" November="300" October="300" September="300" August="300" July="300" June="300" May="300" April="300" March="300" February="300" January="300"/> '+
            ' <submobAvgWeith subMobId="1" mobId="3" December="300" November="300" October="300" September="300" August="300" July="300" June="300" May="300" April="300" March="300" February="300" January="300"/> '+
            ' <submobAvgWeith subMobId="2" mobId="3" December="300" November="300" October="300" September="300" August="300" July="300" June="300" May="300" April="300" March="300" February="300" January="300"/> '+
            ' <submobAvgWeith subMobId="1" mobId="4" December="300" November="300" October="300" September="300" August="300" July="300" June="300" May="300" April="300" March="300" February="300" January="300"/> '+
            ' <submobAvgWeith subMobId="1" mobId="5" December="300" November="300" October="300" September="300" August="300" July="300" June="300" May="300" April="300" March="300" February="300" January="300"/> '+
            ' <submobAvgWeith subMobId="1" mobId="6" December="300" November="300" October="300" September="300" August="300" July="300" June="300" May="300" April="300" March="300" February="300" January="300"/> '+
        ' </submobAvgWeithList> '+
        ' <adjustmentList> '+
            ' <adjustmentRange1 min="0" max="5.0" adjustment="0.8"/> '+
            ' <adjustmentRange2 min="5.1" max="10.0" adjustment="1"/> '+
            ' <adjustmentRange3 min="10.1" max="15.0" adjustment="1"/> '+
            ' <adjustmentRange4 min="15.1" max="25.0" adjustment="1"/> '+
            ' <adjustmentRange5 min="25.1" max="inf" adjustment="1"/> '+
        ' </adjustmentList> '+
    ' </suplementation> '+
    ' <feedlot> '+
        ' <completion enabled="true" suministro="4"> '+
            ' <cef maximo="false" rango="true" pmax="390" pmin="386"/> '+
            ' <csf lwValue="467" bcsValue="5" type="lw"/> '+
            ' <diet feedlotDRProtein="8" feedlotDigest="85" feedlotIntake="2.8" feedlotBProtein="16"/> '+
            ' <mobs> '+
                ' <mob id="5"/> '+
                ' <mob id="6"/> '+
            ' </mobs> '+
        ' </completion> '+
        ' <fattening startmonth="0" startday="1" endmonth="0" endday="1" enabled="true" suministro="5"> '+
            ' <cef maximo="false" rango="true" pmax="230" pmin="208"/> '+
            ' <csf pout="335"/> '+
            ' <diet feedlotDRProtein="8" feedlotDigest="85" feedlotIntake="2.8" feedlotBProtein="18"/> '+
            ' <mobs> '+
                ' <mob id="4"/> '+
                ' <mob id="6"/> '+
            ' </mobs> '+
        ' </fattening> '+
    ' </feedlot> '+
    '<fattening fattMethod="pasto" enableCrop_stubble="true" crop_stubblePriority="3" stockPilledPriority="3" enableStockPilled="true" cuts="true" empties="true" enable="false">'+
        '<pastureAllow December="5" November="5" October="5" September="5" August="5" July="5" June="5" May="5" April="5" March="5" February="5" January="5"/>'+
        '<silageAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/>'+
        '<grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/>'+
        '<stockPilledAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/>'+
        '<crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/>'+
        '<csf type="lw" bcsValue="5" lwValue="435"/>'+
        '<diet feedlotBProtein="10" feedlotIntake="2.8" feedlotDigest="70" feedlotDRProtein="8"/>'+
        '<paddockAssigned>'+
            '<paddock id="5"/>'+
        '</paddockAssigned>'+
    '</fattening>'+

    ' <patrimonio> '+
        ' <pasivo banco="0" proveedores="0" impositivo="0"/> '+
        ' <activo caja="1000" banco="5000" porcobrar="0" landvalue="1120000" buildingvalue="200000"> '+
            ' <bienesdeuso> '+
                ' <deuso id="1" name="Camioneta" buyday="18" buymonth="9" buyyear="2017" utillife="10" buyvalue="80000" type="mconm"/> '+
            ' </bienesdeuso> '+
        ' </activo> '+
    ' </patrimonio> '+
    ' <retiros retiroprct="0"/> '+
    ' <gastos> '+
        ' <estructura> '+
            ' <personal type="anual" anual="0" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
            ' <seguro type="anual" anual="800" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
            ' <patente type="anual" anual="1300" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
            ' <comunicacion type="anual" anual="3000" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
        ' </estructura> '+
        ' <maquinaria> '+
            ' <personal type="anual" anual="0" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
            ' <seguro type="anual" anual="1300" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
            ' <combustible type="anual" anual="9000" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
            ' <reparacion type="anual" anual="0" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
        ' </maquinaria> '+
        ' <administracion> '+
            ' <asesor type="anual" anual="24000" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
        ' </administracion> '+
        ' <invernada> '+
            ' <personal type="anual" anual="19200" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
        ' </invernada> '+
        ' <cria> '+
            ' <personal type="anual" anual="0" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
        ' </cria> '+
        ' <impositivo inmobiliario="5000" ganancia="3000" redesviales="0"/> '+
        ' <sanitario> '+
            ' <invernada type="anual" anual="30.92" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
            ' <cria type="anual" anual="0" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
        ' </sanitario> '+
    ' </gastos> '+
    ' <clima id="2"> '+
        ' <year ord="1" number="1991" id="32"/> '+
        ' <year ord="2" number="1999" id="40"/> '+
        ' <year ord="3" number="1998" id="39"/> '+
        ' <year ord="4" number="1997" id="38"/> '+
        ' <year ord="5" number="1996" id="37"/> '+
    ' </clima> '+
    ' <resourceUsage enable="false"> '+
        ' <pasture/> '+
        ' <crop_stubbles> '+
            ' <crop_stubble id="1" rot_id="6" name="Rastrojo" tipocultivo="Trigo" yield="21" crop_stubbleDigest="70" crop_stubbleDRProtein="8" crop_stubbleBProtein="12" /> '+
            ' <crop_stubble id="2" rot_id="7" name="Rastrojo" tipocultivo="Soja" yield="20" crop_stubbleDigest="50" crop_stubbleDRProtein="7" crop_stubbleBProtein="11" /> '+
            ' <crop_stubble id="2" rot_id="8" name="Rastrojo" tipocultivo="Girasol" yield="22" crop_stubbleDigest="60" crop_stubbleDRProtein="9" crop_stubbleBProtein="13" /> '+
        ' </crop_stubbles> '+
        ' <stockPilled/> '+
    ' </resourceUsage> '+
' </escenario> ';

export function xmlString(){
    return xml;
}
/* 
    Generacion del estado de los recursos forrajeros
*/
let ObjetoSimulacion = {};
let parseString = require('xml2js').parseString;
parseString(xml, function (err, result) {
     ObjetoSimulacion = result;
});

export default ObjetoSimulacion;
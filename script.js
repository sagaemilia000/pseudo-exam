// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

START

SET variabel summa till Totalsumman av notan
SET variabel antalPersoner till Antal personer i sällskapet
SET variabel dricks till Dricks i decimalform

IF summa < 0 eller antalPersoner < 1 eller dricks < 0 THEN
    PRINT Ogiltiga värden. Kontrollera att dina inmatningar är korrekta.
END

SET variabel drickssumma till summa * dricks (beräknar dricksen)
SET variabel totalsumma till summa + drickssumma (beräknar totalsumman med dricks)
SET variabel beloppPerPerson till totalSumma / antalPersoner (beräknar belopp per person)

PRINT Varje person ska betala: "beloppPerPerson"

END

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

CALL play();

FUNCTION play()
    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutordOrd till "FIVE";
    
    SET nuvarandeOrd till startOrd
    PRINT Welcome to Lewis Carroll Word Puzzle!
    PRINT Your goal is to convert "startOrd" to "slutOrd"
    PRINT The rules are: 
    PRINT You can only change one letter at a time, and all words must be valid.

    WHILE nuvarandeOrd inte är samma som slutOrd
        PRINT Current word: "nuvarandeOrd"
        INPUT nyttOrd

        IF nyttOrd inte finns i ordbok THEN
            PRINT Invald word, it is not in the dictionary.

        IF NOT isOneLetterApart(nuvarandeOrd, nyttOrd) THEN 
            PRINT You can only change one letter at a time.
        
        SET nuvarandeOrd till nyttOrd
    END WHILE

    PRINT Congrats! You reached the endword: "slutOrd".
END FUNCTION

FUNCTION isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;

    FOR varje boktsav på samma plats i wordOne och wordTwo
        IF bokstäverna är olika THEN 
            INCREMENT diffCount
        END IF
    END FOR

    RETURN diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
END FUNCTION

END

*/
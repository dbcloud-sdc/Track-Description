#!/bin/bash 
#Above tells interpreter what shell you want to use
echo -e "\n# -------------------------------------"
echo "# STARTING POSTGRESQL LOADING SEQUENCE"
echo "# -------------------------------------"
echo "# Resetting PostgreSQL schema...."
echo "# ----- START PostgreSQL Output -----"
start=$(date +'%T')
SECONDS=0
echo "Starting copying process at:$start"
PGPASSWORD=student /Library/PostgreSQL/11/bin/psql -U postgres < /Users/jackylei/Desktop/hackreactor/sdc/track-description/server/postgres/loader.sql
echo "# ----- START PostgreSQL Output -----"
end=$(date +'%T')
echo "Finishe copying process at: $end"
duration=$SECONDS
echo -e "\nSuccess. Elapsed time: $(($duration)) seconds\n"
echo "# -------------------------------------"
echo "# FINISHED POSTGRESQL LOADING SEQUENCE"
echo "# -------------------------------------"
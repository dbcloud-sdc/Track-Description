#!/bin/bash 
#Above tells interpreter what shell you want to use
echo -e "\n# -------------------------------------"
echo "# STARTING POSTGRESQL LOADING SEQUENCE"
echo "# -------------------------------------"
echo "# Resetting PostgreSQL schema...."
PGPASSWORD=student /Library/PostgreSQL/11/bin/psql -U postgres < /Users/jackylei/Desktop/hackreactor/sdc/track-description/server/seeder/loader/postgres/schema.sql
echo "# ----- START PostgreSQL Output -----"
start=$(date +'%T')
echo "Starting copying process at: $start"
start=$(date +'%T')
SECONDS=0
PGPASSWORD=student /Library/PostgreSQL/11/bin/psql -U postgres -d track_descriptions < /Users/jackylei/Desktop/hackreactor/sdc/track-description/server/seeder/loader/postgres/loader.sql
end=$(date +'%T')
echo "Finished copying process at: $end"
duration=$SECONDS
echo -e "\nSuccess. Elapsed time: $(($duration)) seconds\n"
echo "# -------------------------------------"
echo "# FINISHED POSTGRESQL LOADING SEQUENCE"
echo "# -------------------------------------"